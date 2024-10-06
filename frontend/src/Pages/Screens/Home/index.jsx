import { AuthWrapper } from "../../components/AuthWrapper";
import { StyledHome } from "../../components/StyledHome";
import { mainHomeImg } from "../../../assets";

import "./styles.css"
import { InitialSectioninfo } from "../../components/ScreenHome/InitialSectionInfo";
import { FadeWrapper } from "../../components/FadeWrapper";
import { SectionWrapper } from "../../components/SectionWrapper";
import { SectionServices } from "../../components/ScreenHome/SectionServices";
import { SectionContact } from "../../components/ScreenHome/SectionContact";

const Home = () => {
    return (

        <AuthWrapper>
            <FadeWrapper>
                <StyledHome image={mainHomeImg}>
                    <InitialSectioninfo/>
                </StyledHome>
            </FadeWrapper>

            <SectionServices/>

            <SectionContact/>
        </AuthWrapper>
    );
}

export { Home };