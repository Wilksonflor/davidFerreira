import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../assets/img/logonovo.png";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleAnchorClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <>
      <header>
        <Link to="/">
          <img
            src={logo}
            alt="Logomarca de David Ferreira"
            className={styles.logo}
          />
        </Link>

        <button className={styles.menuMobile} onClick={toggleMenu}>
          {menuOpen ? <IoCloseSharp /> : <IoMenu />}
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                Inicio
              </Link>
            </li>
            <li>
              <a href="#sobre" onClick={(e) => handleAnchorClick(e, "sobre")}>
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#servicos"
                onClick={(e) => handleAnchorClick(e, "servicos")}
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#associados"
                onClick={(e) => handleAnchorClick(e, "associados")}
              >
                Associados
              </a>
            </li>

            <li>
              <a
                href="#contato"
                onClick={(e) => handleAnchorClick(e, "contato")}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
