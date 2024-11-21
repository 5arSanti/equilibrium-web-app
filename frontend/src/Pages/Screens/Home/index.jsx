import { AuthWrapper } from "../../components/AuthWrapper";
import { StyledHome } from "../../components/StyledHome";
import { mainHome } from "../../../assets";

import { InitialSectioninfo } from "../../components/ScreenHome/InitialSectionInfo";
import { FadeWrapper } from "../../components/FadeWrapper";
import { SectionServices } from "../../components/ScreenHome/SectionServices";
import { SectionContact } from "../../components/ScreenHome/SectionContact";

import "./styles.css"
import { SectionAboutUs } from "../../components/ScreenHome/SectionAboutUs";
import { SectionNews } from "../../components/SectionNews";
import { SectionUsersOpinions } from "../../components/SectionUserOpinions";

const Home = () => {
    return (

        <AuthWrapper>
            <FadeWrapper>
                <StyledHome image={mainHome}>
                    <InitialSectioninfo/>
                </StyledHome>
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