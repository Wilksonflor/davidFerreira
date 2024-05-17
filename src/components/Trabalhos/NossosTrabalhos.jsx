import { Carousel } from "antd";
import { trabalhos } from "./Trabalhos";
import styles from "./Trabalhos.module.css";
export const NossosTrabalhos = () => {
  return (
    <>
      <section className={styles.nossosServicos}>
        <h2>Nossos serviços</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
          iusto.
        </p>
        <div className={styles.sectionServicos}>
          <Carousel
            autoplay
            slidesToShow={4}
            dots={false}
            className={styles.carrossel}
            responsive={[
              
              {
                breakpoint: 1700,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 1181,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                },
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            {trabalhos.map((trabalho, index) => (
              <div key={index} className={styles.boxServicos}>
                <h3>{trabalho.titulo}</h3>
                <span>{trabalho.icon}</span>
                <p>{trabalho.descricao}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
};
