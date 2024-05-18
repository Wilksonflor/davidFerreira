import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { Row, Col } from "antd";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import styles from "./Footer.module.css";

export const Footer = () => {
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
          <div className={styles.socialIcons}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className={styles.iconInsta}
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/Wilksonflor"
              target="_blank"
              className={styles.iconWp}
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQiLCJteCI6IjIifQ%3D%3D%22%7D"
              target="_blank"
              className={styles.X}
            >
              <RiTwitterXFill />
            </a>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <div className={styles.developer}>
            <p>
              2024 @ Todos os direitos reservados - Projetado e desenvolvido por{" "}
              <span>Wilkson Flor.</span>
            </p>
          </div>
        </Col>
      </Row>
    </footer>
  );
};
