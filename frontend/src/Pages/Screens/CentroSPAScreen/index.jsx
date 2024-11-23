import React from "react";
import { AuthWrapper, IsAuthWrapper } from "../../components/AuthWrapper";
import { MainSectionInfoCard } from "../../components/MainSectionInfoCard";
import { StyledSection } from "../../components/StyledSection";
import { AppContext } from "../../../Context";

const CentroSPAScreen = () => {
    const { fetchData } = React.useContext(AppContext);

    React.useEffect(() => {
        const endpoints = [
            ``
        ]

        fetchData(endpoints)
    }, [])

    return(
        <AuthWrapper>
            <IsAuthWrapper notFound={true}>
                <StyledSection>
                    <MainSectionInfoCard
                        title=""
                        subTitle="Gestion de informacion de usuarios precisa"
                        icon={<FaUsers/>}
                    />
                </StyledSection>

                <SectionActualUser/>

                <SectionUsersList/>
            </IsAuthWrapper>
        </AuthWrapper>
    );
}

export { CentroSPAScreen };