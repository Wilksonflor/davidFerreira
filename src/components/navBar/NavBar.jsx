import { useState } from "react";

import { Link, Route, Routes } from "react-router-dom";
import styles from "./NavBar.module.css";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("clicou");
  };
  return (
    <>
      <header>
        <Link>
          <h3>logo</h3>
        </Link>

        <button className={styles.menuMobile} onClick={toggleMenu}>
          {menuOpen ? <IoCloseSharp /> : <IoMenu />}
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""} `}>
          <ul>
            <li>
              <Link to={"/"}>Inicio</Link>
            </li>
            <li>
              <Link to={"/sobre"}>Sobre</Link>
            </li>
            <li>
              <Link to={"/servicos"}>Serviços</Link>
            </li>
            <li>
              <Link to={"contato"}>Contato</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* <Routes>
        <Route path="/" element="" />
        <Route path="" element="" />
        <Route path="" element="" />
        <Route path="" element="" />
      </Routes> */}
    </>
  );
};
