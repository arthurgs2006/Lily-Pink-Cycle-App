import { Link } from "react-router-dom";
import instaIcon from "./img/instagramIcon.svg";
import docIcon from "./img/docIcon.svg";
import arrow from "./img/arrow-right.svg";
import "./style.scss";

export default function () {
  return (
    <>
      <div className="getInPage " data-aos='fade-up'>
        <div className="container">
          <section className="text-area" >
            <h1 className="title" >
              Bem-vindxs <br />
              <b>Lily Pink Cycle</b>!
            </h1>
            <p className="content" >
              Conheça Lily Pink Cycle, uma Web Application que instrue sobre a
              saúde feminina, levando informações e ajuda a quem mais precisa,
              contendo elementos novos e essênciais ao nosso público-alvo,
              contendo simplicidade e veracididade em nossas matérias. Nosso
              objetivo é fornecer informações precisas e atualizadas, de forma
              acessível e inclusiva. Acreditamos que todas as pessoas têm
              direito a informações sobre sua saúde e bem-estar,
              independentemente de sua identidade de gênero. Confira nossa rede
              social, documentação e uma versão beta da aplicação a ser
              desenvolvida.
            </p>
          </section>
          <nav className="links" >
            <a href="https://www.instagram.com/lilypinkcicle/" target="_blank">
              <button className=" btn-nav">
                <img src={instaIcon} alt="Conta_do_ Instagram" />
              </button>
            </a>
            <a href="https://senacspedu-my.sharepoint.com/:b:/g/personal/arthur_gsaldanha_senacsp_edu_br/EbamGH2cJQtHhC2qBa1WGPABy86E3nRizGTrG0pk7DOc6g?e=nNFVnT" target="_blank">
              <button className=" btn-nav">
                <img src={docIcon} alt="Portifólio e Documentação" />
              </button>
            </a>
            <Link to="homepage">
              <button className=" btn-nav access" >
                <img src={arrow} alt="Acessar Website (BETA)" />
              </button>
            </Link>
          </nav>
        </div>
      </div>
      {/* animation */}
      <div class="animation-wrapper">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
      </div>
      {/* /> animation */}
    </>
  );
}
