import { createBrowserRouter } from "react-router-dom"
import MainMenu from "./pages/mainMenu/MainMenu";
import Account from "./pages/account/account";
import PrincipalPage from "./pages/principalPage/PrincipalPage";
import Feed from "./pages/feed/Feed";
import Payments from './components/accountComponents/Payments/Payments';
import AccountSettings from './components/accountComponents/Account_Settings/account_settings';
import DataAndUse from './components/accountComponents/Use_&_Data/usedata';
import About from './components/accountComponents/AboutApp/about';
import Settings from "./pages/settings/Settings";
import MyAccount from "./components/accountComponents/MyAccount/MyAccount";

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
        element: <Account/>,
        children: [
            {index: true, element: <MyAccount />},
            {path: 'payments', element: <Payments />},
            {path: 'accountsettings', element: < AccountSettings/>},
            {path: 'data&use', element: <DataAndUse />},
            {path: 'aboutApp', element: <About />}
        ]
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