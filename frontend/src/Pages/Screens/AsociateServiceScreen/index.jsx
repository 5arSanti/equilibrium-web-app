import { useParams } from "react-router-dom";
import { AuthWrapper } from "../../components/AuthWrapper";
import React from "react";
import { AppContext } from "../../../Context";
import { StyledSection } from "../../components/StyledSection";
import { MainSectionInfoCard } from "../../components/MainSectionInfoCard";
import { Icons } from "../../../utils/Icons";
import { SectionWrapper } from "../../components/SectionWrapper";
import { SectionTitle } from "../../components/SectionWrapper/SectionTitle";
import { TextCard } from "../../components/TextComponents";
import { TableContainer } from "../../components/TableContainer";
import { SchedulesTable } from "../../components/SchedulesTable";

const AsociateServiceScreen = () => {
    const { Associate_ID } = useParams();

    const { fetchData, responseData } = React.useContext(AppContext);

    const { associateService, associateSchedules } = responseData;

    React.useEffect(() => {
        const endpoints = [
            `/associates/${Associate_ID}`,
            `/associates/${Associate_ID}/schedules`,
        ]

        fetchData(endpoints)
    }, [Associate_ID]);

    return (
        <AuthWrapper>
            <StyledSection image={associateService?.Imagen}>
                <MainSectionInfoCard
                    white={true}
                    title={associateService?.Nombre_Servicio}
                    subTitle={`Ofrecido por ${associateService?.Entidad}`}
                    icon={Icons[associateService?.Icono]}
                />
            </StyledSection>

            <SectionWrapper>
                <SectionTitle subTitle={`Le ofrecemos lo que usted necesita`} title="Sobre el servicio"/>
                <TextCard textAlign="center">{associateService?.Descripcion}</TextCard>
            </SectionWrapper>

            <SectionWrapper>
                <SchedulesTable schedulesByDay={associateSchedules}/>
            </SectionWrapper>
                
        </AuthWrapper>
    )
}

export { AsociateServiceScreen };