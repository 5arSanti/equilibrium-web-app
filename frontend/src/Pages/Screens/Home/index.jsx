import { AuthWrapper } from "../../components/AuthWrapper";

import { InitialSectioninfo } from "../../components/ScreenHome/InitialSectionInfo";
import { FadeWrapper } from "../../components/FadeWrapper";
import { SectionServices } from "../../components/ScreenHome/SectionServices";
import { SectionContact } from "../../components/ScreenHome/SectionContact";

import "./styles.css"
import { SectionAboutUs } from "../../components/ScreenHome/SectionAboutUs";
import { SectionNews } from "../../components/SectionNews";
import { SectionUsersOpinions } from "../../components/SectionUserOpinions";
import { StyledSection } from "../../components/StyledSection";

const Home = () => {
    return (

        <AuthWrapper>
            <FadeWrapper>
                <StyledSection>
                    <InitialSectioninfo/>
                </StyledSection>
            </FadeWrapper>

            <SectionServices/>

            <SectionAboutUs/>

            <SectionUsersOpinions/>

            <SectionContact/>

            <SectionNews/>
        </AuthWrapper>
    );
}

export { Home };