import { AuthWrapper } from "../../components/AuthWrapper";
import { StyledHome } from "../../components/StyledHome";
import { mainHomeImg } from "../../../assets";

import "./styles.css"
import { InitialSectioninfo } from "../../components/ScreenHome/InitialSectionInfo";

const Home = () => {
    return (

        <AuthWrapper>
            <StyledHome image={mainHomeImg}>
                <InitialSectioninfo/>
            </StyledHome>
        </AuthWrapper>
    );
}

export { Home };