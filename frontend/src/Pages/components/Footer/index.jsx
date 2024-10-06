import { Link } from "react-router-dom";
import { IconsList } from "../IconsList";

import "./styles.css";
import { WrapperContainer2 } from "../WrapperContainers";
import { Title } from "../Title";
import { TextCard } from "../TextComponents";
import { contactInfo } from "../../../utils/ContactInfo/contactInfo";

const Footer = () => {
    const date = new Date();

    return (
        <footer className="footer">
            <div>
                <div className="footer-info">
                    <TextCard fontSize={12} white={true} textAlign="center">{contactInfo["Numero de celular"].info}</TextCard>
                </div>
                <WrapperContainer2 justifyContent="center" alignItems="center" gap={5} flexDirection="column">
                    <Link to={"/home"}>
                        <Title className="animacion" white={true}>EQUILIBRIUM EGES</Title>
                        <TextCard width="auto" className="animacion" white={true} textAlign="center">GRUPO EMPRESARIAL DE LA SALUD</TextCard>
                    </Link>
                </WrapperContainer2>
            </div>

            <div className="footer-copy-container">
                <p>Copyright &copy; {date.getFullYear()} Equilibrium EGES</p>
                <div className="footer-icons">
                    <IconsList white={true}/>
                </div>
            </div>
        </footer>
    );
}
export {Footer};