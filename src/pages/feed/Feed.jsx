import HeaderContent from "../../components/HeaderContent";
import './style.scss'
import GridBox from "../../components/gridBox";
import preservativo from './img/preservativo.png'
import ginecologistas from './img/ginecologista.jpg'
import desenho from './img/ginecologista-desenho.png'
import consulta from './img/consulta.jpg'
import drjarci from './img/drjarci.png'
import gravidez from './img/gravidez.jpg'
import infogeral from './img/infogeral.png'
import medica from './img/medica.jpeg'

const elements = [
  {
    id: 'preservativos',
    title: "Preservativos",
    content: "Saiba mais sobre o uso e outros detalhes sobre preservativos.",
    img: preservativo,
    link: "https://www.gov.br/aids/pt-br/assuntos/prevencao-combinada/usar-preservativos-masculinos-femininos-e-gel-lubrificantes"
  },
  {
    id: 'ginecologistas',
    title: "Ginecologistas",
    content: "Saiba mais sobre a consulta e outros detalhes sobre Ginecologistas.",
    img: ginecologistas,
    link: 'https://www.doctoralia.com.br/ginecologista/ribeirao-preto'
  },
  {
    id: 'info',
    title: "Informações Gerais",
    content: "Saiba mais sobre dúvidas gerais da comunidade.",
    img: infogeral,
    link: 'https://go.bd.com/saudedamulher.html'
  },
  {
    id: 'gravidez',
    title: "Gravidez",
    content: "Saiba mais detalhes sobre a Gravidez.",
    img: gravidez,
    link: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/g/gravidez'
  },
  {
    id: 'ensinamentos',
    title: "Ensinamentos",
    content: "Conheça alguns ensinamentos da área vitalicia do seu corpo.",
    img: desenho,
    link: 'https://schupp.com.br/blog/10-dicas-para-cuidar-da-saude-intima-da-mulher/'
  },
  {
    id: 'contatocomalguem',
    title: "Converse com Alguém",
    content: "Tenha contato com algum profissional que possa te ajudar em que precisa.",
    img: consulta,
    link: 'https://oya.care/servicos/sos-oya?utm_source=google&utm_medium=cpc&utm_campaign=go_br_oy_conv_cvs-agen_generica_gine_sos_kws&utm_content=kws_generica_consolidado_n-a_automatico_consulta.dinam_texto_dinamico_n-a_sos-ginecologico&utm_id={{campaign.id}}&gclid=Cj0KCQiAo7KqBhDhARIsAKhZ4ugGLqaMs4tjiGQB6JusuLIwmmL0Sf_7Yrz9kx2lCOCpZ5l3zYD7SVMaAmZYEALw_wcB'
  },
  {
    id: 'medicos',
    title: "Médicos Disponíveis",
    content: "Conheça alguns médicos aliados disponiveis para você.",
    img: medica,
    link: 'https://www.doctoralia.com.br/medico-clinico-geral/ribeirao-preto'
  },
  {
    id: 'drjarci',
    title: "Dr. Jarci Recomenda",
    content: "Conheça a principal embaixadora do Lírio Rosa e descubra alguns de seus ensinamentos",
    img: drjarci,
    link: 'https://www.instagram.com/jacisantanadermatologista/'
  },
];

export default function () {
  return (
    <div className="container" data-aos="fade=up">
      <header>
        <HeaderContent />
        <h1 className="display-6">
          Feed <b>Pink</b>
        </h1>
      </header>
      <main className="grid">
        {elements.map( section => (
            <GridBox alt={section.content} label={section.title} src={section.img} key={section.id} https={section.link}/>
        ))}
      </main>
    </div>
  );
}
