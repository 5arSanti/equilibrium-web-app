import { AuthWrapper } from "../../components/AuthWrapper";
import { StyledHome } from "../../components/StyledHome";
import { mainHomeImg } from "../../../assets";

import "./styles.css"

const Home = () => {
    return (

        <AuthWrapper>
            <StyledHome image={mainHomeImg}/>
        </AuthWrapper>
    );
}

export { Home };