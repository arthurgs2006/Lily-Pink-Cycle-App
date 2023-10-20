import { createBrowserRouter } from "react-router-dom"
import MainMenu from "./pages/mainMenu/MainMenu";
import Account from "./pages/account/account";
import PrincipalPage from "./pages/principalPage/PrincipalPage";
import Feed from "./pages/feed/Feed";
import Settings from "./pages/settings/Settings";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <PrincipalPage />,
    },
    {
        path: 'homepage',
        element: <MainMenu />,
    },
    {
        path: 'account',
        element: <Account/>
    },
    {
        path: 'feed',
        element: <Feed/>
    },
    {
        path: 'settings',
        element: <Settings/>
    }
])

export {routes};