import { useState, createContext, useEffect } from "react";

export const DataContext = createContext(null);

export function ContextProvider({ children }) {
  const [blog, setBlog] = useState(null);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("data.json");
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, []);

  return (
    <DataContext.Provider value={{ blog, darkTheme, setDarkTheme }}>
      {children}
    </DataContext.Provider>
  );
}
