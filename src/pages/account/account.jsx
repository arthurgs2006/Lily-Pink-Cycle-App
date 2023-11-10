import { Outlet } from "react-router-dom";
import Header from "../../components/accountComponents/Header/Header.jsx";
import "./style.module.scss";

export default function () {
  return (
    <div className="mainContent" data-aos="fade-right">
        <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
