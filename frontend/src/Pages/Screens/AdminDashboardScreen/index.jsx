import { AuthWrapper } from "../../components/AuthWrapper";
import { IsAdminWrapper } from "../../components/AuthWrapper/IsAdminWrapper";
import { MainSectionInfoCard } from "../../components/MainSectionInfoCard";
import { AdminDashboard } from "../../components/ScreenAdminDashboard/AdminDashboard";
import { StyledSection } from "../../components/StyledSection";

import { RiAdminLine } from "react-icons/ri";

const AdminDashboardScreen = () => {

    return(
        <AuthWrapper>
            <IsAdminWrapper notFound={true}>
                <StyledSection>
                    <MainSectionInfoCard
                        white={true}
                        title="Dashboard de Administracion"
                        subTitle="Gestion de la informacion del sistema"
                        icon={<RiAdminLine/>}
                    />
                </StyledSection>

                <AdminDashboard/>

            </IsAdminWrapper>
        </AuthWrapper>
    );
}

export { AdminDashboardScreen };