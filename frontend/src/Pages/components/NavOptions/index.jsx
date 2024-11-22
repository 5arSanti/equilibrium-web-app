import React from "react";
import { Link } from "react-router-dom";

import { egesServices } from "../../../utils/EGESServices";
import { IsAuthWrapper } from "../AuthWrapper";
import { handleLogout } from "../../../utils/handleData/handleLogout";
import { IoLogOutOutline } from "react-icons/io5";
import { FaUser, FaUsers } from "react-icons/fa6";


import { AppContext } from "../../../Context";
import "./styles.css";


const NavOptions = ({className="nav-buttons animacion2"}) => {
    const context = React.useContext(AppContext)

    return(
        <div className="nav-buttons-container">
            {egesServices.map((item, index) => (
                <Link 
                    className={className}
                    key={index} 
                    to={item.uri}
                >
                    {item.serviceName}
                    {item.icon}
                </Link>
            ))}

            {!context.auth && 
                <Link to={"/login"} className={`${className}`}>Iniciar Sesión <FaUser/></Link>
            }

            <IsAuthWrapper>
                <Link to={"/users"} className={`${className}`}>Usuarios <FaUsers/></Link>
                
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