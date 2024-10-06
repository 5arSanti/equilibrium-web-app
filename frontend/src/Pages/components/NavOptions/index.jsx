import { Link } from "react-router-dom";

import "./styles.css";
import { egesServices } from "../../../utils/EGESServices";

const NavOptions = () => {

    return(
        <div className="navbar-right">
            {egesServices.map((item, index) => (
                <Link className="animacion2-blue" key={index} to={item.uri}>{item.serviceName}</Link>
            ))}

        </div>
    )
}
export { NavOptions };