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
import { GridContainer } from "../../components/GridContainer";
import { WrapperContainer2 } from "../../components/WrapperContainers";
import { SubTitle } from "../../components/SubTitle";
import { SubInfoCard } from "../../components/SubInfoCard";
import { LogInfoCard } from "../../components/LogInfoCard";
import { formatNumbers } from "../../../utils/Format/formatNumbers";
import { MdSavings } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";

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
                
                <WrapperContainer2 justifyContent="start" alignItems="start" flexDirection="column" gap={35}>
                    <SubTitle fontSize={24}>{associateService?.Nombre_Servicio}</SubTitle>
                    <SubInfoCard 
                        titleSize={18} 
                        textSize={16} 
                        subTitle={"Descripción del servicio."} 
                        text={associateService?.Descripcion}
                        textAlign="start"
                    />

                    <GridContainer>
                        <LogInfoCard 
                            title={"Coste por sesion"} 
                            text={`$ ${formatNumbers(associateService?.Precio)}`} 
                            icon={<MdSavings/>}
                        />
                        <LogInfoCard 
                            title={"Categoria"} 
                            text={associateService?.Categoria} 
                            icon={<BiCategoryAlt/>}
                        />
                        
                    </GridContainer>

                    <SubTitle fontSize={24}>Horarios</SubTitle>

                    <SchedulesTable schedulesByDay={associateSchedules}/>
                </WrapperContainer2>

            </SectionWrapper>
                
        </AuthWrapper>
    )
}

export { AsociateServiceScreen };