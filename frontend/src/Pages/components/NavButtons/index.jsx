import React from "react";
import { AppContext } from "../../../Context";
import { Icons } from "../../../utils/Icons";
import { Link } from "react-router-dom";

const NavButtons = ({className="nav-buttons animacion2 pl2"}) => {
    const { mainServices } = React.useContext(AppContext).responseData;


    return(
        mainServices?.map((item, index) => (
            <Link 
                className={className}
                key={index} 
                to={item.Enlace}
            >
                {item.Nombre_Servicio}
                {Icons[item.Icono]}
            </Link>
        ))
    )
}

export { NavButtons }; 