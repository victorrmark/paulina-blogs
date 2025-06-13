// import { useState } from 'react'
import { ContextProvider } from "./context";
import Nav from "./components/Nav";
import Profile from "./components/Profile/Profile";
import Articles from "./components/Articles/Articles";
import Newsletter from "./components/Newsletter/Newsletter";
import About from "./components/About/About";
import Slug from "./components/Slug/Slug";
import Footer from "./components/Footer/Footer"
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  // const [theme, setTheme] = useState(()=>{return localStorage.getItem("theme")});

  useEffect(()=>{
    if(localStorage.getItem("Theme") === 'dark_mode'){
      document.body.classList.add("dark")
      setDarkTheme(true)
    }else{
      document.body.classList.remove()
    }
  },[darkTheme])


  async function changeColorMode() {
    document.body.classList.toggle("dark");
    setDarkTheme(!darkTheme);
    if (!darkTheme) {
      // document.body.style.backgroundColor = "#1c1a19";
      // document.body.style.color = "#fefefe";
      await localStorage.setItem("Theme", "dark_mode")
    } else {
      // document.body.style.backgroundColor = "";
      // document.body.style.color = "";
      await localStorage.setItem("Theme", 'light_mode')
    }
  }

  // function changebg(){
  //   document.body.style.backgroundColor = 'black'
  // }

  return (
    <ContextProvider>
      <Nav
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        changeColorMode={changeColorMode}
      />
      <div id="body">
        <Routes>
          <Route path="/" element={<Profile darkTheme={darkTheme}/>} />
          <Route path="/blog" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/blog/:slug" element={<Slug darkTheme={darkTheme}/>} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      <Footer darkTheme={darkTheme} />
      </div>
    </ContextProvider>
  );
}

export default App;
