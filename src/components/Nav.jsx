import { NavLink } from "react-router-dom";
import profileImg from "../assets/images/image-avatar.jpg";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import darkIcon from "../assets/images/icon-moon.svg";
import lightIcon from "../assets/images/icon-sun.svg";
import { useState, useRef, useEffect } from "react";

export default function Nav({ darkTheme, changeColorMode }) {
  const [hamMenu, setHamMenu] = useState(false);
  const hamRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleOutClick(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !hamRef.current.contains(e.target)
      ) {
        setHamMenu(false);
      }
    }

    document.addEventListener("mousedown", handleOutClick);
    return () => document.removeEventListener("mousedown", handleOutClick);
  });

  function closeHamMenu() {
    setHamMenu(false);
  }

  function toggleMenu() {
    setHamMenu(!hamMenu);
  }

  return (
    <div className="nav-section">
      <div className="img-container">
        <div className="img-wrapper">
          <img alt="profile-img" src={profileImg} />
        </div>
      </div>

      <div
        className={hamMenu ? "close hamburger" : "hamburger open"}
        onClick={toggleMenu}
        ref={hamRef}
        onKeyDown={(e) => {
          if (e.key == "Enter") setHamMenu(!hamMenu);
        }}
        tabIndex={0}
      >
        {hamMenu ? (
          <FiX className="close_ham" />
        ) : (
          <FiAlignJustify className="open" />
          // <img alt="hamburger-open-menu" src={openMenu} />
        )}
      </div>

      {hamMenu && (
        <div className="nav-mobile nav" ref={menuRef}>
          <NavLink to="/" end onClick={closeHamMenu}>
            Home
          </NavLink>
          <NavLink to="/blog" onClick={closeHamMenu}>
            Blog
          </NavLink>
          <NavLink to="/about" onClick={closeHamMenu}>
            About
          </NavLink>
          <NavLink to="/newsletter" onClick={closeHamMenu}>
            Newsletter
          </NavLink>
        </div>
      )}

      <div className="desktop nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/newsletter">Newsletter</NavLink>
      </div>

      <div
        className="color-mode"
        onClick={changeColorMode}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key == "Enter") changeColorMode();
        }}
      >
        {darkTheme ? (
          <img alt="light-mode" src={lightIcon} />
        ) : (
          <img alt="dark-mode" src={darkIcon} />
        )}
      </div>
    </div>
  );
}
