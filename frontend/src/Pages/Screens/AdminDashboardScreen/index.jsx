import { AuthWrapper, IsAuthWrapper } from "../../components/AuthWrapper";
import { MainSectionInfoCard } from "../../components/MainSectionInfoCard";
import { AdminDashboard } from "../../components/ScreenAdminDashboard/AdminDashboard";
import { StyledSection } from "../../components/StyledSection";

import { RiAdminLine } from "react-icons/ri";

const AdminDashboardScreen = () => {

    return(
        <AuthWrapper>
            <IsAuthWrapper notFound={true}>
                <StyledSection>
                    <MainSectionInfoCard
                        white={true}
                        title="Dashboard de Administracion"
                        subTitle="Gestion de la informacion del sistema"
                        icon={<RiAdminLine/>}
                    />
                </StyledSection>

                <AdminDashboard/>

            </IsAuthWrapper>
        </AuthWrapper>
    );
}

export { AdminDashboardScreen };