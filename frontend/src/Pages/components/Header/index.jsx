import { NavLink } from "react-router-dom";
import { NavOptions } from "../NavOptions";

import { mainLogo } from "../../../assets";

import "./styles.css"

const Header = () => {

    return(
        <nav className="nav-container animacion-nav">
            <NavLink to="/">
                <img src={mainLogo} alt="" />
            </NavLink>

            <NavOptions/>
        </nav>
    );
}

export { Header };