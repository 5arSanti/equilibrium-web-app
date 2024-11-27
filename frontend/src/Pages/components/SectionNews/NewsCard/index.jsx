import { Link } from "react-router-dom";

import { SubTitle } from "../../SubTitle";
import { SpanCard, TextCard } from "../../TextComponents";
import { WrapperContainer1, WrapperContainer2 } from "../../WrapperContainers";

import moment from "moment"

import "./styles.css"
import { GridContainer } from "../../GridContainer";
import { SubInfoCard } from "../../SubInfoCard";

const NewsCard = ({item={}}) => {
    return (
        <WrapperContainer2 flexDirection="column" padding={"0 10px"}>
            <Link to={`/news/${item.ID_Noticia}`} style={{width: "100%", height: "100%"}}>

                <WrapperContainer1 height="100%" gap={20} padding={"25px 35px"} flexDirection="column">
                    <WrapperContainer2 flexDirection="column" gap={10} padding={0}>

                        <SubTitle>
                            <TextCard white={true} fontSize={20} className="bold">
                                <SpanCard fontSize={20} className="bold">
                                    {item?.Titulo}
                                </SpanCard>
                            </TextCard>
                        </SubTitle>

                        <TextCard white={true} fontSize={12} textAlign="start" className={"italic"}>
                            Publicado el dia {moment(item?.Fecha_Publicacion).format("DD/MM/YYYY")}
                        </TextCard>
                        
                        
                        <TextCard 
                            white={true} 
                            fontSize={14}
                        >
                            {item?.SubTitulo}
                        </TextCard>

                    </WrapperContainer2>

                    <GridContainer padding={0}>
                        <SubInfoCard 
                            subTitle={"Tipo de noticia"} 
                            text={item.Tipo_Noticia}
                            padding={"10px 20px"}
                            textAlign="center"
                        />
                        <SubInfoCard 
                            subTitle={"Categoria de la noticia"} 
                            text={item.Categoria_Servicio}
                            padding={"10px 20px"}
                            textAlign="center"
                        />

                    </GridContainer>


                </WrapperContainer1>
            </Link>
        </WrapperContainer2>
    );
}

export { NewsCard }; 