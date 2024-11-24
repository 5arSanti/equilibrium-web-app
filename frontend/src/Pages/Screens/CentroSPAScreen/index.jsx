import React from "react";
import { AuthWrapper, IsAuthWrapper } from "../../components/AuthWrapper";
import { MainSectionInfoCard } from "../../components/MainSectionInfoCard";
import { StyledSection } from "../../components/StyledSection";
import { AppContext } from "../../../Context";
import { Icons } from "../../../utils/Icons";
import { StyleCard1 } from "../../components/AsociateServiceCards/StyleCard1";
import { SectionWrapper } from "../../components/SectionWrapper";
import { SectionTitle } from "../../components/SectionWrapper/SectionTitle";
import { TextCard } from "../../components/TextComponents";
import { StyleCard2 } from "../../components/AsociateServiceCards/StyleCard1";

const CentroSPAScreen = () => {
    const { fetchData, responseData } = React.useContext(AppContext);

    const { mainService, asociateServices } = responseData;

    React.useEffect(() => {
        const endpoints = [
            `services/1`,
            `services/asociate/1`,
        ]

        fetchData(endpoints)
    }, [])

    return(
        <AuthWrapper>
            <StyledSection>
                <MainSectionInfoCard
                    white={true}
                    title={mainService?.Nombre_Servicio}
                    subTitle={mainService?.Descripcion}
                    icon={Icons[mainService?.Icono]}
                />
            </StyledSection>

            <SectionWrapper>
                <SectionTitle subTitle="Le ofrecemos lo que usted necesita" title="Sobre el servicio"/>
                <TextCard textAlign="center">{mainService?.Descripcion}</TextCard>
            </SectionWrapper>

            {asociateServices?.map((item, index) => (
                <StyleCard1 item={item} key={index}/>
            ))}
                
        </AuthWrapper>
    );
}

export { CentroSPAScreen };