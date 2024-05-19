import styles from "./Associados.module.css";
import { associados } from "./AssociadosList";
import { FaInstagram, FaTwitter } from "react-icons/fa";

export const Associados = () => {
  return (
    <section className={styles.associadosSection} id="associados">
      <h2>Nossos Associados</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iure!
      </p>
      <div className={styles.associadosContainer}>
        {associados.map((associado, index) => (
          <div key={index} className={styles.associadoCard}>
            <img
              src={associado.foto}
              alt={associado.nome}
              className={styles.associadoFoto}
            />
            <div className={styles.socialLinks}>
              {associado.instagram && (
                <a
                  href={associado.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              )}
              {associado.twitter && (
                <a
                  href={associado.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              )}
            </div>
            <div className={styles.associadosDescricao}>
              <h3>{associado.nome}</h3>
              <p>{associado.area}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Associados;
