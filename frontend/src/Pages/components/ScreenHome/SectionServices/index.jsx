import { servicesImage } from "../../../../assets";
import { GridContainer } from "../../GridContainer";
import { SectionWrapper } from "../../SectionWrapper"
import { SectionTitle } from "../../SectionWrapper/SectionTitle";
import { Title } from "../../Title";
import { WrapperContainer2 } from "../../WrapperContainers"
import { ServicesContainer } from "./ServicesContainer";

import "./styles.css"

const SectionServices = () => {
    return(
        <SectionWrapper>
            <WrapperContainer2 flexDirection="column">
                <SectionTitle title="SERVICIOS" subTitle="NUESTROS"/>

                <GridContainer className="grid-125-075" gap={0}>
                    <ServicesContainer/>

                    <WrapperContainer2>
                        <WrapperContainer2 padding={0} justifyContent="center" alignItems="center">
                            <img className="about-me-image" src={servicesImage} alt="Services Image" />
                        </WrapperContainer2>
                    </WrapperContainer2>

                </GridContainer>
            </WrapperContainer2>
        </SectionWrapper>
    )
}

export { SectionServices };