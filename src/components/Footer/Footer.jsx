import { Link } from "react-router-dom";
import logo from "../../assets/img/logonovo.png";
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0486055270903!2d-35.59952842416462!3d-8.686927988474748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x700a06821592523%3A0x28f1213c8af98977!2sAv.%20Abel%20Fraga%2C%2034%20-%20Palmares%2C%20PE%2C%2055540-000!5e0!3m2!1spt-BR!2sbr!4v1716220913776!5m2!1spt-BR!2sbr"
            width="500"
            height="450"
            allowFullScreen=""
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
