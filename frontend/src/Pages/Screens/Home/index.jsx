import { AuthWrapper } from "../../components/AuthWrapper";
import { StyledHome } from "../../components/StyledHome";
import { mainHomeImg } from "../../../assets";

import { InitialSectioninfo } from "../../components/ScreenHome/InitialSectionInfo";
import { FadeWrapper } from "../../components/FadeWrapper";
import { SectionServices } from "../../components/ScreenHome/SectionServices";
import { SectionContact } from "../../components/ScreenHome/SectionContact";

import "./styles.css"
import { SectionAboutUs } from "../../components/ScreenHome/SectionAboutUs";

const Home = () => {
    return (

        <AuthWrapper>
            <FadeWrapper>
                <StyledHome image={mainHomeImg}>
                    <InitialSectioninfo/>
                </StyledHome>
            </FadeWrapper>

            <SectionAboutUs/>

            <SectionServices/>

            <SectionContact/>
        </AuthWrapper>
    );
}

export { Home };