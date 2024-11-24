import { Link } from "react-router-dom";

import "./styles.css";
import { mainHome } from "../../../../assets";
import { Title } from "../../Title";
import { WrapperContainer2 } from "../../WrapperContainers";
import { TextCard } from "../../TextComponents";

const StyleCard1 = ({item={}}) => {

    return(
        <Link to={`${item.id}`}>
            <WrapperContainer2
                padding={0} 
                gap={0} 
                justifyContent="center"
                alignItems="center"
                className="style-card2 relative"
            >
                <div className="project-info">
                    <WrapperContainer2 
                        flexDirection="column" 
                        gap={20} 
                        className="title-and-info-container"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Title 
                            fontSize={32}
                            padding={0} 
                            white={true}
                            textAlign="start"
                        >
                            {item.Nombre_Servicio}
                        </Title>

                        <TextCard white={true}>{item.Descripcion}</TextCard>
                        <TextCard white={true} fontSize={12}>Pulse aca, para ver mas informacion</TextCard>
                    </WrapperContainer2>

                </div>
                <img src={item.Imagen || mainHome} alt={`${item.Nombre}-background`}/>
            </WrapperContainer2>
        </Link>
    );
}

export { StyleCard1 };