import NavBarElement from "../../components/navbar/navbar";
import lilyPinkLogo from "../../logo/lilyPinkLogo.png";
export default function () {
  return (
    <>
      <div className="container construction-boundary " data-aos="fade-up">
      <NavBarElement className={'lilyLogo img-fluid'} href={'/homepage'} alt={'home'} src={lilyPinkLogo} id={'home'} />
      <b className="mt-2">Clique na Logo para retornar ao Menu Principal</b>
        <section className="display-6">
          <b>Ops...</b>
          <p>Você acessou uma área ainda em construção do nosso WebApp!</p>
        </section>
        <p>
          Volte aqui outro dia para conferir sempre as novidades Lily Pink Cycle :)
        </p>
      </div>
    </>
  );
}
