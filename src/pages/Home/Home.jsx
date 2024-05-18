import { NavBar } from "../../components/navBar/NavBar";
import david from "../../assets/img/david.jpg";
import styles from "./Home.module.css";
import { FaBalanceScale } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io"
export const Home = () => {
  return (
    <>
      <NavBar />
      <section className={styles.sectionSobre}>
        <img src={david} alt="homem-vestindo-paleto-preto-formal" />
        <div className={styles.textSobre}>
          <h1>
            David Ferreira - Advocacia e Assessoria Jurídica <FaBalanceScale />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur
            debitis quaerat, saepe necessitatibus nesciunt
          </p>
          <button>Fale conosco <IoLogoWhatsapp className={styles.iconWhats}/></button>
        </div>
      </section>
    </>
  );
};

export default Home;
