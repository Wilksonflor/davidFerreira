import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../assets/img/logo.png";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () =>{
    setMenuOpen(false)
  }
  return (
    <>
      <header>
        <Link>
          <img
            src={logo}
            alt="Logomarca de david Ferreira"
            className={styles.logo}
          />
        </Link>

        <button className={styles.menuMobile} onClick={toggleMenu}>
          {menuOpen ? <IoCloseSharp /> : <IoMenu />}
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""} `}>
          <ul>
            <li>
              <Link to={"/"} onClick={closeMenu}>Inicio</Link>
            </li>
            <li>
              <Link to={"/sobre"} onClick={closeMenu}>Sobre</Link>
            </li>
            <li>
              <Link to={"/servicos"} onClick={closeMenu}>Serviços</Link>
            </li>
            <li>
              <Link to={"contato"} onClick={closeMenu}>Contato</Link>
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
