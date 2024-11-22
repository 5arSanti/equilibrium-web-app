//Dependencies
import React from "react";
import { HashRouter, Navigate, useLocation, useRoutes } from "react-router-dom";

// CSS
import './App.css';
import "./styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Context
import { AppProvider } from "../../Context";

// Components
import { Footer } from "../components/Footer";
import { ToastContainer } from "react-toastify";
import { LoadingCard } from "../components/LoadingCard";
import { AppRoutes } from "../Routes";

// Utils
import { scrollToValue } from "../../utils/scrollToValue";
import { Header } from "../components/Header";

import { HeaderContact } from "../components/HeaderContact";

const Wrapper = ({children}) => {
    const location = useLocation();
    React.useLayoutEffect(() => {
        scrollToValue();
    }, [location.pathname]);

    return children;
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

