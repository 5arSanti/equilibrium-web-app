import { Link } from "react-router-dom";
import { IconsList } from "../IconsList";

import "./styles.css";
import { WrapperContainer2 } from "../WrapperContainers";
import { Title } from "../Title";
import { TextCard } from "../TextComponents";
import { contactInfo } from "../../../utils/ContactInfo/contactInfo";
import { GridContainer } from "../GridContainer";
import { egesServices } from "../../../utils/EGESServices";

import { MdOpenInNew } from "react-icons/md";

const Footer = () => {
    const date = new Date();

    return (
        <footer className="footer">
            <WrapperContainer2 flexDirection="column" gap={75}>


                <WrapperContainer2 justifyContent="center" alignItems="center" gap={5} flexDirection="column">
                    <Link to={"/home"}>
                        <Title className="animacion2" white={true}>EQUILIBRIUM EGES</Title>
                        <TextCard width="auto" className="animacion2" white={true} textAlign="center">GRUPO EMPRESARIAL DE LA SALUD</TextCard>
                    </Link>
                </WrapperContainer2>

                <GridContainer className="grid-1-1-1">
                    {egesServices.map((item, index) => (
                        <Link to={"/home"} key={index}>
                            <WrapperContainer2 justifyContent="center" alignItems="center" padding={0}>
                                <TextCard width="auto" className="animacion2" white={true} textAlign="center">{item.serviceName}</TextCard>
                            </WrapperContainer2>
                        </Link>
                    ))}
                </GridContainer>

                <WrapperContainer2 justifyContent="center" alignItems="center" padding={"40px 0px 0px 0px"} className="border-top">
                    <TextCard width="auto" className="privacy-policy animacion2" fontSize={13} white={true} textAlign="center">Politica de privacidad <MdOpenInNew/></TextCard>
                </WrapperContainer2>
            </WrapperContainer2>

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