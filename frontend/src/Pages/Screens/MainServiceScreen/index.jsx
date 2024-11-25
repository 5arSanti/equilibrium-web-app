import React from "react";
import { AuthWrapper } from "../../components/AuthWrapper";
import { MainSectionInfoCard } from "../../components/MainSectionInfoCard";
import { StyledSection } from "../../components/StyledSection";
import { AppContext } from "../../../Context";
import { Icons } from "../../../utils/Icons";
import { StyleCard1 } from "../../components/AsociateServiceCards/StyleCard1";
import { SectionWrapper } from "../../components/SectionWrapper";
import { SectionTitle } from "../../components/SectionWrapper/SectionTitle";
import { TextCard } from "../../components/TextComponents";
import { useParams } from "react-router-dom";

const MainServiceScreen = () => {
    const { Service_ID } = useParams();

    const { fetchData, responseData } = React.useContext(AppContext);

    const { mainService, associateServices } = responseData;

    React.useEffect(() => {
        const endpoints = [
            `services/${Service_ID}`,
            `services/${Service_ID}/associates`,
        ]

        fetchData(endpoints)
    }, [Service_ID]);

    return(
        <AuthWrapper>
            <StyledSection image={mainService?.Imagen}>
                <MainSectionInfoCard
                    white={true}
                    title={mainService?.Nombre}
                    subTitle={`Ofrecido por ${mainService?.Entidad}`}
                    icon={Icons[mainService?.Icono]}
                    
                />
            </StyledSection>

            <SectionWrapper>
                <SectionTitle subTitle={`Le ofrecemos lo que usted necesita`} title="Sobre el servicio"/>
                <TextCard textAlign="center">{mainService?.Descripcion}</TextCard>
            </SectionWrapper>

            {associateServices?.map((item, index) => (
                <StyleCard1 item={item} key={index}/>
            ))}
                
        </AuthWrapper>
    );
}

export { MainServiceScreen };