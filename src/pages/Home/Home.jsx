import { NavBar } from "../../components/navBar/NavBar";
import { CiSearch } from "react-icons/ci";
import { FaBalanceScale } from "react-icons/fa";
import { GiGavel } from "react-icons/gi";
export const Home = () => {
  const trabalhos = [
    {
      titulo: "",
      icon: <CiSearch />,
      descricao: "",
    },
    {
      titulo: "",
      icon: <FaBalanceScale />,
      descricao: "",
    },
    {
      titulo: "",
      icon: <GiGavel />,
      descricao: "",
    },
    {
      titulo: "",
      icon: "",
      descricao: "",
    },
  ];
  return (
    <>
      <NavBar />
      <section>
        <img
          src="https://images.pexels.com/photos/8428055/pexels-photo-8428055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <h1>David Ferreira - Advocacia e Assessoria Jurídica</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur
          debitis quaerat, saepe necessitatibus nesciunt exercitationem! Est
          earum tempore rerum.
        </p>

        <div>
          <h3>Encontre um advogado</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque illo
            possimus placeat recusandae quidem impedit hic architecto labore,
            sapiente totam.
          </p>
        </div>

        <div>
          <h3>Encontre um advogado</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque illo
            possimus placeat recusandae quidem impedit hic architecto labore,
            sapiente totam.
          </p>
        </div>

        <div>
          <h3>Encontre um advogado</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque illo
            possimus placeat recusandae quidem impedit hic architecto labore,
            sapiente totam.
          </p>
        </div>

        <button>Entre em contato</button>
      </section>

      <section>
        <h2>Nossos serviços</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
          iusto.
        </p>

        <div>
          {/* Aqui vai o icone */}

          <h3>Consultoria</h3>
          <p>
            Oferecemos consultoria jurídica especializada para empresas e
            indivíduos, fornecendo orientação precisa e estratégias legais
            personalizadas.
          </p>
        </div>
      </section>
    </>
  );
};
