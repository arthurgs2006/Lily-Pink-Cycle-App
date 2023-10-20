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
  },
  {
    id: 'ginecologistas',
    title: "Ginecologistas",
    content: "Saiba mais sobre a consulta e outros detalhes sobre Ginecologistas.",
    img: ginecologistas,
  },
  {
    id: 'info',
    title: "Informações Gerais",
    content: "Saiba mais sobre dúvidas gerais da comunidade.",
    img: infogeral,
  },
  {
    id: 'gravidez',
    title: "Gravidez",
    content: "Saiba mais detalhes sobre a Gravidez.",
    img: gravidez,
  },
  {
    id: 'ensinamentos',
    title: "Ensinamentos",
    content: "Conheça alguns ensinamentos da área vitalicia do seu corpo.",
    img: desenho,
  },
  {
    id: 'contatocomalguem',
    title: "Converse com Alguém",
    content: "Tenha contato com algum profissional que possa te ajudar em que precisa.",
    img: consulta,
  },
  {
    id: 'medicos',
    title: "Médicos Disponíveis",
    content: "Conheça alguns médicos aliados disponiveis para você.",
    img: medica,
  },
  {
    id: 'drjarci',
    title: "Dr. Jarci Recomenda",
    content: "Conheça a principal embaixadora do Lírio Rosa e descubra alguns de seus ensinamentos",
    img: drjarci,
  },
];

export default function () {
  return (
    <div className="container">
      <header>
        <HeaderContent />
        <h1 className="display-6">
          Feed <b>Pink</b>
        </h1>
      </header>
      <main className="grid">
        {elements.map( section => (
            <GridBox alt={section.content} label={section.title} src={section.img} key={section.id}/>
        ))}
      </main>
    </div>
  );
}
