import React from "react";
import { AppContext } from "../../Context";
import { Navigate, useRoutes } from "react-router-dom";

import { Home } from "../Screens/Home";
import { RegisterScreen } from "../Screens/RegisterScreen";
import { LoginScreen } from "../Screens/LoginScreen";
import { UsersScreen } from "../Screens/UsersScreen";
import { AdminDashboardScreen } from "../Screens/AdminDashboardScreen";
import { MainServiceScreen } from "../Screens/MainServiceScreen";
import { AsociateServiceScreen } from "../Screens/AsociateServiceScreen";

const AppRoutes = () => {

    const context = React.useContext(AppContext);
    const { auth } = context;

    let routes = useRoutes([
        {path: "/home", element: <Home/>},
        {path: "/:Service_ID", element: <MainServiceScreen/>},
        {path: "/:Service_ID/:Associate_ID", element: <AsociateServiceScreen/>},

        {path: "/*", element: <Navigate replace to={"/home"}/>},
        
        {path: "/admin-dash", element: <AdminDashboardScreen/>},
        {path: "/users", element: <UsersScreen/>},
        {path: "/register", element: <RegisterScreen/>},

        {path: "/login", element: !auth ? <LoginScreen/> : <Navigate replace to={"/home"}/>},
    ]);
    
    return routes;
}

export { AppRoutes };