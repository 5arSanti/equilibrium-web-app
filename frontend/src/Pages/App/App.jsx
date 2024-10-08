//Dependencies
import React from "react";
import { HashRouter, Navigate, useLocation, useRoutes } from "react-router-dom";

// CSS
import './App.css'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Context
import { AppProvider } from "../../Context";

//Screens
import { Home } from "../Screens/Home";

// Components
import { Footer } from "../components/Footer";
import { ToastContainer } from "react-toastify";
import { LoadingCard } from "../components/LoadingCard";

// Utils
import { scrollToValue } from "../../utils/scrollToValue";
import { Header } from "../components/Header";

// CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HeaderContact } from "../components/HeaderContact";

const Wrapper = ({children}) => {
    const location = useLocation();
    React.useLayoutEffect(() => {
        scrollToValue();
    }, [location.pathname]);

    return children;
}

const AppRoutes = () => {

    let routes = useRoutes([
        {path: "/home", element: <Home/>},
        {path: "/*", element: <Navigate replace to={"/home"}/>},


    ]);
    
    return routes;
}

const App = () => {
    return (
        <AppProvider>
            <HashRouter>
                <Wrapper>
                    <Header/>
                    <HeaderContact/>
                    
                    <LoadingCard/>

                    <AppRoutes/>

                    <ToastContainer/>
                    <Footer/>
                </Wrapper>
            </HashRouter>
        </AppProvider>
    );
}

export default App;

