import NavBarElement from "../../components/navbar/navbar";
import lilyPinkLogo from "../../logo/lilyPinkLogo.png";
import FormList from "../../components/settingsPageComponents/FormList";
import CheckBox from "../../components/settingsPageComponents/CheckBox";
import { Link } from "react-router-dom";
import "./style.scss";
export default function () {
  return (
    <>
      {/* <div className="container construction-boundary " data-aos="fade-up">
      <NavBarElement className={'lilyLogo img-fluid'} href={'/homepage'} alt={'home'} src={lilyPinkLogo} id={'home'} />
      <b className="mt-2">Clique na Logo para retornar ao Menu Principal</b>
        <section className="display-6">
          <b>Ops...</b>
          <p>Você acessou uma área ainda em construção do nosso WebApp!</p>
        </section>
        <p>
          Volte aqui outro dia para conferir sempre as novidades Lily Pink Cycle :)
        </p>
      </div> */}
      <div className="container-fluid">
        <header className="container headerSettings pt-4">
          <Link to="/homepage">
            <NavBarElement
              className={"lilyLogo img-fluid"}
              href={"/homepage"}
              alt={"home"}
              src={lilyPinkLogo}
              id={"home"}
            />
          </Link>
          <h1 className="display-5 pt-2 ">Configurações</h1>
        </header>
        <main className="container boxSettings mt-4">
          <section className="section">
            <h2>Cookies e Envio de Dados:</h2>
            <div action="" className="upper-area-settings pt-2">
              <div className="list-area">
                <FormList
                  id={1}
                  labelInfo={"Aceito Receber Notificações do APP"}
                />
                <FormList
                  id={2}
                  labelInfo={"Dados poderão ser compartilhados com a Empresa"}
                />
                <FormList
                  id={3}
                  labelInfo={"Aceito Receber Notificações do APP"}
                />
              </div>
              <div className="list-area">
                <FormList
                  id={4}
                  labelInfo={"Aceito Receber Notificações do APP"}
                />
                <FormList
                  id={5}
                  labelInfo={"Aceito Receber Notificações do APP"}
                />
                <FormList
                  id={6}
                  labelInfo={"Aceito Receber Notificações do APP"}
                />
              </div>
            </div>
          </section>
          <section className="mt-3 ">
            <h2>Permissões:</h2>
            <div className="upper-area-settings">
              <div className=" list-area">
                <CheckBox id={7} labelInfo={"Acessar a Notificação"} />
                <CheckBox id={8} labelInfo={"Acessar a Notificação"} />
                <CheckBox id={9} labelInfo={"Acessar a Notificação"} />
              </div>
              <div className=" list-area">
                <CheckBox id={10} labelInfo={"Acessar a Notificação"} />
                <CheckBox id={11} labelInfo={"Acessar a Notificação"} />
                <CheckBox id={12} labelInfo={"Acessar a Notificação"} />
              </div>
            </div>
          </section>
          <section className="footer">
            <h2>Sair</h2>
              <span>Se deseja sair de sua conta registrada no Lily Pink App...</span>
              <b>Aperte o Botão abaixo:</b>
              <button className="btn btn-danger mt-3">Sair</button>
          </section>
        </main>
      </div>
    </>
  );
}
