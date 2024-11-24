import { AuthWrapper } from "../../components/AuthWrapper";
import { IsAdminWrapper } from "../../components/AuthWrapper/IsAdminWrapper";
import { MainSectionInfoCard } from "../../components/MainSectionInfoCard";
import { SectionActualUser } from "../../components/ScreenUsers/SectionActualUser";
import { SectionUsersList } from "../../components/ScreenUsers/SectionUsersList";
import { StyledSection } from "../../components/StyledSection";

import { FaUsers } from "react-icons/fa";

const UsersScreen = () => {
    return(
        <AuthWrapper>
            <IsAdminWrapper notFound={true}>
                <StyledSection>
                    <MainSectionInfoCard
                        title="Usuarios"
                        subTitle="Gestion de informacion de usuarios precisa"
                        icon={<FaUsers/>}
                    />
                </StyledSection>

                <SectionActualUser/>

                <SectionUsersList/>
            </IsAdminWrapper>
        </AuthWrapper>
    );
}

export { UsersScreen };