import NavBarElement from "../navbar/navbar";
import account from "./img/account.svg";
import house from "./img/house.svg";
import settings from "./img/settings.svg";
import lilyPinkLogo from "./img/lilyPinkLogo.png";
import { Link } from "react-router-dom";

export default function ({ homeButton }) {
  if (homeButton) {
    return (
      <div className="container-fluid">
        <header className="container header">
          <div className=" navbar00 cl-pr">
            <NavBarElement
              href={"/account"}
              alt={"account"}
              src={account}
              id="account"
            />
            <NavBarElement href={"/feed"} alt={"home"} src={house} id="home" />
            <NavBarElement
              href={"/settings"}
              alt={"settings"}
              src={settings}
              id="settings"
            />
          </div>
          <Link to="/" className=" logo-element">
            <img src={lilyPinkLogo} alt="lilyPinkLogo" />
          </Link>
        </header>
      </div>
    );
  }
  return (
    <div className="container-fluid">
      <header className="container header">
        <div className=" navbar00 cl-pr">
          <NavBarElement
            href={"/account"}
            alt={"account"}
            src={account}
            id="account"
          />
          <NavBarElement href={"/feed"} alt={"feed"} src={house} id="feed" />
          <NavBarElement
            href={"/settings"}
            alt={"settings"}
            src={settings}
            id="settings"
          />
          <NavBarElement className={'lilyLogo'} href={'/homepage'} alt={'home'} src={lilyPinkLogo} id={'home'} />
        </div>
      </header>
    </div>
  );
}
