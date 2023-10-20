import { Link, Outlet} from "react-router-dom";

export default function () {
  return (
    <div className="mainContent">
      <div className="container-fluid">
        <aside>
            <span>@useraccount</span>
            <img src="" alt="" className=""/>
            <div>
                <Link>
                    <span>Minha Conta</span>
                </Link>
                <Link>
                    <span>Pagamentos</span>
                </Link>
                <Link>
                    <span>Configurações na Conta</span>
                </Link>
                <Link>
                    <span>Dados e Uso</span>
                </Link>
                <Link>
                    <span>Sobre o APP</span>
                </Link>
            </div>
        </aside>
        <main>
            <Outlet />
        </main>
      </div>
    </div>
  );
}
