import React from "react";
import { AuthWrapper, IsAuthWrapper } from "../../components/AuthWrapper";
import { MainSectionInfoCard } from "../../components/MainSectionInfoCard";
import { StyledSection } from "../../components/StyledSection";
import { AppContext } from "../../../Context";
import { Icons } from "../../../utils/Icons";

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

                
        </AuthWrapper>
    );
}

export { CentroSPAScreen };