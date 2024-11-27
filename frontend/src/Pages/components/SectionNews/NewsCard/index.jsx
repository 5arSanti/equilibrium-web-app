import moment from "moment"
import { Link } from "react-router-dom";

import { SubTitle } from "../../SubTitle";
import { SpanCard, TextCard } from "../../TextComponents";
import { WrapperContainer1, WrapperContainer2 } from "../../WrapperContainers";

import { GridContainer } from "../../GridContainer";
import { SubInfoCard } from "../../SubInfoCard";
import { StyledSection } from "../../StyledSection";

import "./styles.css"

const NewsCard = ({item={}}) => {
    return (
        <WrapperContainer2 flexDirection="column" padding={"0 10px"}>
            <Link 
                to={`/news/${item.ID_Noticia}`} 
                style={{width: "100%", height: "100%"}} 
                title={`Ir a ${item.Titulo}`}
            >

                <WrapperContainer1 
                    gap={0} 
                    padding={0} 
                    flexDirection="column"
                    className="relative news-container"
                    justifyContent="center"
                    alignItems="center"
                >
                    <WrapperContainer2 
                        height="100%" 
                        gap={20} 
                        padding={"25px 35px"} 
                        flexDirection="column"
                        className="news-card animation-bg"
                        justifyContent="center"
                        alignItems="center"
                    >

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
                    </WrapperContainer2>

                    <img 
                        src={item?.Imagen?.src} 
                        className={"bg"}
                        alt="alt-image"
                    />
                </WrapperContainer1>
            </Link>
        </WrapperContainer2>
    );
}

export { NewsCard }; 