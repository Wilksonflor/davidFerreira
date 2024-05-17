import { NavBar } from "../../components/navBar/NavBar";

import styles from "./Home.module.css";
import { FaBalanceScale } from "react-icons/fa";

export const Home = () => {
  return (
    <>
      <NavBar />
      <section className={styles.sectionSobre}>
        <img
          src="https://www.pexels.com/pt-br/foto/homem-vestindo-paleto-preto-formal-32976/"
          alt="homem-vestindo-paleto-preto-formal"
        />
        <div className={styles.textSobre}>
          <h1>
            David Ferreira - Advocacia e Assessoria Jurídica <FaBalanceScale />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur
            debitis quaerat, saepe necessitatibus nesciunt exercitationem! Est
            earum tempore rerum.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
