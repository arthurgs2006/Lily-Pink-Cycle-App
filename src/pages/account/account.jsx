import { Link, Outlet } from "react-router-dom";
import "./style.scss";
import lilyPinkLogo from "../../components/headerContent/img/lilyPinkLogo.png";
import profileimg from "./img/Generic-Profile-Image.png";
import MyAccount from "../../components/accountComponents/MyAccount/MyAccount";
export default function () {
  return (
    <div className="mainContent" data-aos='fade-right'>
      <aside className="tabBar">
        <div className="profile-info">
          <div className="upper-area">
            <Link to="/homepage" className=" logo-element">
              <img src={lilyPinkLogo} alt="lilyPinkLogo" className="logo-img" />
            </Link>
              <span className="text-center span">@useraccount</span>
          </div>
          <div className="profile-element">
            <img src={profileimg} alt="profile" className="profile img-fluid" />
          </div>
        </div>
        <div className="tabBarLinks">
          <Link className="box" element={< MyAccount/>}>
            <span>Minha Conta</span>
          </Link>
          <Link className="box">
            <span>Pagamentos</span>
          </Link>
          <Link className="box">
            <span>Configurações na Conta</span>
          </Link>
          <Link className="box">
            <span>Dados e Uso</span>
          </Link>
          <Link className="box">
            <span>Sobre o APP</span>
          </Link>
        </div>
        <div className="text-center footer">@LilyPinkCycle</div>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
