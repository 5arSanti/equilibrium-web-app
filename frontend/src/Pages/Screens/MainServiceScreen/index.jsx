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
import { useParams } from "react-router-dom";

const MainServiceScreen = () => {
    const { Service_ID } = useParams();

    const { fetchData, responseData } = React.useContext(AppContext);

    const { mainService, asociateServices } = responseData;

    React.useEffect(() => {
        const endpoints = [
            `services/${Service_ID}`,
            `services/asociate/${Service_ID}`,
        ]

        fetchData(endpoints)
    }, [Service_ID])

    return(
        <AuthWrapper>
            <StyledSection>
                <MainSectionInfoCard
                    white={true}
                    title={mainService?.Nombre_Servicio}
                    subTitle={`Ofrecido por ${mainService?.Entidad}`}
                    icon={Icons[mainService?.Icono]}
                />
            </StyledSection>

            <SectionWrapper>
                <SectionTitle subTitle={`Le ofrecemos lo que usted necesita`} title="Sobre el servicio"/>
                <TextCard textAlign="center">{mainService?.Descripcion}</TextCard>
            </SectionWrapper>

            {asociateServices?.map((item, index) => (
                <StyleCard1 item={item} key={index}/>
            ))}
                
        </AuthWrapper>
    );
}

export { MainServiceScreen };