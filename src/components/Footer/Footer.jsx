import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { Row, Col } from "antd";
import { FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Footer.module.css";

export const Footer = () => {
  const handleAnchorClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer} id="contato">
      <Row
        gutter={[8, 8]}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col
          xs={24}
          sm={24}
          md={8}
          lg={8}
          xl={8}
          className="text-center"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/">
            <img src={logo} alt="" className={styles.logoFooter} />
          </Link>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} className="text-center">
          <nav className={styles.navFooter}>
            <ul>
              <li>
                <Link to="/" onClick={(e) => handleAnchorClick(e, "home")}>
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
                  href="#contato"
                  onClick={(e) => handleAnchorClick(e, "contato")}
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={8}
          lg={8}
          xl={8}
          className="text-center"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2>
            Nossa localização{" "}
            <span className={styles.iconMap}>
              <FaMapMarkerAlt />
            </span>
          </h2>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7888.082222888345!2d-35.5980941!3d-8.6876405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab3d7b32dbe6dd%3A0x4dbf239e2fbdab84!2sDF%20David%20Ferreira%20Advocacia%20e%20Consultoria%20Jur%C3%ADdica!5e0!3m2!1spt-BR!2sbr!4v1716124933431!5m2!1spt-BR!2sbr"
            width="500"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.mapa}
          ></iframe>
        </Col>
        <Col xs={24} sm={24} md={24} lg={16} xl={8}>
          <div className={styles.developer}>
            <p>2024 @ Todos os direitos reservados</p>-
            <p>
              Projetado e desenvolvido por <span>Wilkson Flor.</span>
            </p>
          </div>
        </Col>
      </Row>
    </footer>
  );
};
