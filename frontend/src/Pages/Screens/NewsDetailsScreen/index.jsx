import React from "react";
import moment from "moment";

import { useParams } from "react-router-dom";
import { StyledSection } from "../../components/StyledSection";
import { AppContext } from "../../../Context";
import { WrapperContainer2 } from "../../components/WrapperContainers";
import { Title } from "../../components/Title";
import { SpanCard, TextCard } from "../../components/TextComponents";
import { AuthWrapper } from "../../components/AuthWrapper";
import { SubTitle } from "../../components/SubTitle";
import { GridContainer } from "../../components/GridContainer";
import { ImageParserCard } from "../../components/ImageParserCard";

const NewsDetailsScreen = () => {
    const { ID_Noticia } = useParams();

    const { fetchData, responseData } = React.useContext(AppContext);

    const { newsDetail } = responseData;

    React.useEffect(() => {
        const endpoints = [
            `/news/details/${ID_Noticia}`
        ]

        fetchData(endpoints);
    }, []);


    return(
        <AuthWrapper>
            <StyledSection image={newsDetail?.Imagen?.src}>
                <WrapperContainer2 
                    justifyContent="flex-end" 
                    alignItems="flex-start"
                    padding={50} 
                    gap={10} 
                    flexDirection="column"
                >
                    <Title white={true} textAlign="start" fontSize={38} padding={0} width="auto">
                        {newsDetail?.Titulo}
                    </Title>
                    <TextCard white={true} className="italic">
                        Publicado por {newsDetail?.Nombre_Autor} {newsDetail?.Apellidos_Autor} | {moment(newsDetail?.Fecha_Publicacion).format("DD/MM/YYYY")}
                    </TextCard>
                </WrapperContainer2>
            </StyledSection>
            <WrapperContainer2 padding={"50px 200px"} gap={40} flexDirection="column">
                <WrapperContainer2 padding={0}>
                    <TextCard textAlign="center">
                        <SpanCard>Tipo de Noticia: </SpanCard> <br />
                        {newsDetail?.Tipo_Noticia}
                    </TextCard>
                    <TextCard textAlign="center">
                        <SpanCard>Categoria de la noticia: </SpanCard> <br />
                        {newsDetail?.Categoria_Servicio}
                    </TextCard>
                </WrapperContainer2>

                <Title textAlign="start" padding={0}>{newsDetail?.Titulo}</Title>

                <SubTitle fontSize={26}>{newsDetail?.SubTitulo}</SubTitle>

                <TextCard fontSize={18}>{newsDetail?.Cuerpo_Noticia}</TextCard>

                <TextCard fontSize={18} className="italic">
                    <SpanCard>Fuente.</SpanCard> <br />
                    &quot;{newsDetail?.Fuente}&quot;
                </TextCard>

                <GridContainer className="grid-05-15">
                    <ImageParserCard 
                        data={newsDetail?.Imagen_Autor}
                        style={true}
                    />
                    <WrapperContainer2 flexDirection="column" justifyContent="center" alignItems="center">
                        <TextCard fontSize={14}>
                            Publicado por <br />
                            <SpanCard fontSize={18}>{newsDetail?.Nombre_Autor} {newsDetail?.Apellidos_Autor}</SpanCard>
                        </TextCard>
                        <TextCard fontSize={14}>
                            El dia <br />
                            <SpanCard fontSize={18}>{moment(newsDetail?.Fecha_Publicacion).format("dddd, D [de] MMMM [de] YYYY")}</SpanCard>
                        </TextCard>
                    </WrapperContainer2>
                </GridContainer>
            </WrapperContainer2>
        </AuthWrapper>
    );
}

export { NewsDetailsScreen };