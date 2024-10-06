import { GridContainer } from "../../GridContainer";
import { SectionWrapper } from "../../SectionWrapper";
import { TextCard } from "../../TextComponents";
import { Title } from "../../Title";
import { WrapperContainer1, WrapperContainer2 } from "../../WrapperContainers";
import { ContactInformation } from "./ContactInformation";

const SectionContact = () => {
    return(
        <SectionWrapper padding={30}>
            <WrapperContainer2 flexDirection="column" padding={100}>
                <WrapperContainer2 flexDirection="column" gap={0}>
                    <TextCard fontSize={12} textAlign="center">QUE ESTAS ESPERANDO...</TextCard>
                    <Title>CONTACTANOS</Title>
                </WrapperContainer2>

                <GridContainer>
                    <WrapperContainer1></WrapperContainer1>
                    <ContactInformation/>
                    {/* <GoogleMapContainer/> */}
                </GridContainer>
            </WrapperContainer2>
        </SectionWrapper>
    );
}

export { SectionContact };