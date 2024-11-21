import { GridContainer } from "../../GridContainer";
import { MapCard } from "../../MapCard";
import { SectionWrapper } from "../../SectionWrapper";
import { SectionTitle } from "../../SectionWrapper/SectionTitle";
import { WrapperContainer2, WrapperContainer3 } from "../../WrapperContainers";
import { ContactInformation } from "./ContactInformation";

const SectionContact = () => {
    return(
        <SectionWrapper padding={30}>
            <WrapperContainer2 flexDirection="column" padding={100}>
                <SectionTitle title="CONTACTANOS" subTitle="QUE ESTAS ESPERANDO..."/>

                <GridContainer>
                    <WrapperContainer3 padding={0} justifyContent="center" alignItems="center">
                        <MapCard/>
                    </WrapperContainer3>
                    
                    <ContactInformation/>
                </GridContainer>
            </WrapperContainer2>
        </SectionWrapper>
    );
}

export { SectionContact };