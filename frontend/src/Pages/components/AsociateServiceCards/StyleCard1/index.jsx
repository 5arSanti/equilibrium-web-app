import { Link } from "react-router-dom";
import { mainHome } from "../../../../assets";
import { Title } from "../../Title";
import { WrapperContainer2 } from "../../WrapperContainers";
import { TextCard } from "../../TextComponents";
import { SlideButtonCard } from "../SlideButtonCard";

import { MdOutlineNavigateNext } from "react-icons/md";

import "./styles.css";

const StyleCard1 = ({item={}}) => {

    return(
        <Link to={`${item.id}`} title={`Ver mas detalles de ${item.Nombre_Servicio}`}>
            <WrapperContainer2
                padding={0} 
                gap={0} 
                justifyContent="center"
                alignItems="center"
                className="style-card2 relative"
            >
                <div className="project-info relative">
                    <WrapperContainer2 
                        flexDirection="column" 
                        gap={20} 
                        className="title-and-info-container"
                        justifyContent="center"
                        alignItems="start"
                    >
                        <Title 
                            fontSize={32}
                            padding={0} 
                            white={true}
                            textAlign="start"
                            className="animacion"
                            width="auto"
                        >
                            {item.Nombre_Servicio}
                        </Title>

                        <TextCard white={true}>{item.Descripcion}</TextCard>
                        <TextCard white={true} width="auto" fontSize={12} className="animacion">Pulse aca, para ver mas informacion <MdOutlineNavigateNext/></TextCard>
                    </WrapperContainer2>

                    <SlideButtonCard/>
                </div>


                <img src={item.Imagen || mainHome} alt={`${item.Nombre}-background`}/>
            </WrapperContainer2>
        </Link>
    );
}

export { StyleCard1 };