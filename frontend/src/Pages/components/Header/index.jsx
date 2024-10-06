import { NavLink } from "react-router-dom";
import { NavOptions } from "../NavOptions";

import "./styles.css"
import { mainLogo } from "../../../assets";

const Header = () => {

    return(
        <nav className="nav-container animacion-nav">
            <NavLink to="/" className="animacion">
                <img src={mainLogo} alt="" />
            </NavLink>

            <NavOptions/>
        </nav>
    );
}

export { Header };