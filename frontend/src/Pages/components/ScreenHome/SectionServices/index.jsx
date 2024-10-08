import { FadeWrapper } from "../../FadeWrapper";
import { WrapperContainer2 } from "../../WrapperContainers"
import { ServicesContainer } from "./ServicesContainer";

import "./styles.css"

const SectionServices = () => {
    return(
        <FadeWrapper>
            <WrapperContainer2 flexDirection="column" padding={0}>
                <ServicesContainer/>
            </WrapperContainer2>
        </FadeWrapper>
    )
}

export { SectionServices };