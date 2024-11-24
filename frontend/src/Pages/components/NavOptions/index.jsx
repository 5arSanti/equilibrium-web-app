import React from "react";
import { Link } from "react-router-dom";

import { handleLogout } from "../../../utils/handleData/handleLogout";
import { IoLogOutOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { AppContext } from "../../../Context";
import { NavButtons } from "../NavButtons";

import { RiAdminLine } from "react-icons/ri";

import "./styles.css";
import { IsAdminWrapper } from "../AuthWrapper/IsAdminWrapper";
import { IsAuthWrapper } from "../AuthWrapper/IsAuthWrapper";


const NavOptions = ({className="nav-buttons animacion2 pl2"}) => {
    const { auth } = React.useContext(AppContext)

    return(
        <div className="nav-buttons-container">
            <NavButtons className={className}/>

            {!auth && 
                <Link to={"/login"} className={`${className}`}>Iniciar Sesión <FaUser/></Link>
            }

            <IsAdminWrapper>
                <Link to={"/admin-dash"} className={`${className}`}>Administracion <RiAdminLine/></Link>
            </IsAdminWrapper>
            
            <IsAuthWrapper>
                <button  
                    className={`${className}`} 
                    onClick={handleLogout}
                >
                    Cerrar Sesión
                    <IoLogOutOutline/>
                </button>
            </IsAuthWrapper>
        </div>
    )
}
export { NavOptions };