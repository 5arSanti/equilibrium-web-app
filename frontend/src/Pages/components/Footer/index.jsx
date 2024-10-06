import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { IconsList } from "../IconsList";

import "./styles.css";

const Footer = () => {
    const date = new Date();

    return (
        <footer className="footer">
            <div>
                <div className="footer-info">
                    <Link to="/">
                        <p className="animacion">Equilibrium</p>    
                    </Link>

                    <Link to="/" className="footer-info-image-container">
                        {/* <img src={logo} alt="Logo" /> */}
                    </Link>

                    <a href="mailto:santiari05@hotmail.com">
                        <p className="animacion">
                            santiari05@hotmail.com 
                            <HiOutlineArrowTopRightOnSquare className="text-sm inline-block ml-2"/>
                        </p>  
                    </a>

                </div>
            </div>

            <div className="footer-copy-container">
                <p>&copy; {date.getFullYear()} Equilibrium</p>
                <div className="footer-icons">
                    <IconsList white={true}/>
                </div>
            </div>
        </footer>
    );
}
export {Footer};