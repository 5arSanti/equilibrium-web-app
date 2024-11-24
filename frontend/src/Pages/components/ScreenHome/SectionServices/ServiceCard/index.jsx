import { WrapperContainer2 } from "../../../WrapperContainers";
import { TextCard } from "../../../TextComponents";
import { SubTitle } from "../../../SubTitle";
import { Link } from "react-router-dom";

import "./styles.css"
import { Icons } from "../../../../../utils/Icons";

const ServiceCard = ({item={}}) => {
    return(
        <Link className="service-container" to={`/${item.Enlace}`}>
            <WrapperContainer2 
                flexDirection="column" 
                justifyContent="center" 
                alignItems="start" 
                padding={50} 
                gap={30}
            >
                {Icons[item.Icono]}

                <WrapperContainer2 flexDirection="column" gap={0} padding={0}>
                    <TextCard fontSize={14}>{item.Entidad}</TextCard>
                    <SubTitle>{item.Nombre_Servicio}</SubTitle>

                </WrapperContainer2>
                <TextCard fontSize={16}>{item.Descripcion}</TextCard>

            </WrapperContainer2>
        </Link>
    )
}

export { ServiceCard };