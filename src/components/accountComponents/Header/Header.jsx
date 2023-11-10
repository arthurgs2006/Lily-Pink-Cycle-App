import { Link } from "react-router-dom";
import "./style.scss";
import lilyPinkLogo from "../../../logo/lilyPinkLogo.png";
import profileimg from "./img/Generic-Profile-Image.png";
export default function () {
  return (
    <>
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
          <Link className="box" to="/account">
            <span>Minha Conta</span>
          </Link>
          <Link className="box" to="payments">
            <span>Pagamentos</span>
          </Link>
          <Link className="box" to="accountsettings">
            <span>Configurações no APP</span>
          </Link>
          <Link className="box" to="data&use">
            <span>Dados e Uso</span>
          </Link>
          <Link className="box" to="aboutApp">
            <span>Sobre o APP</span>
          </Link>
        </div>
        <div className="text-center footer">@LilyPinkCycle</div>
      </aside>
    </>
  );
}
