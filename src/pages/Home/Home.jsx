import { NavBar } from "../../components/navBar/NavBar";

import styles from "./Home.module.css";
import { FaBalanceScale } from "react-icons/fa";


export const Home = () => {
  return (
    <>
      <NavBar />
      <section className={styles.sectionSobre}>
        <img
          src="https://images.pexels.com/photos/8428055/pexels-photo-8428055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
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
