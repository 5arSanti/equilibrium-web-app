import { GoogleMapContainer } from "../../GoogleMapContainer";
import { GridContainer } from "../../GridContainer";
import { SectionWrapper } from "../../SectionWrapper";
import { SubTitle } from "../../SubTitle";
import { TextCard } from "../../TextComponents";
import { Title } from "../../Title";
import { WrapperContainer1, WrapperContainer2 } from "../../WrapperContainers";
import { ContactInformation } from "./ContactInformation";

const SectionContact = () => {
    return(
        <SectionWrapper>
            <WrapperContainer2 flexDirection="column" paddingVertical={50}>
                <WrapperContainer2 flexDirection="column" gap={0}>
                    <TextCard fontSize={12} textAlign="center">QUE ESTAS ESPERANDO...</TextCard>
                    <Title>CONTACTANOS</Title>
                </WrapperContainer2>

                <GridContainer>
                    <ContactInformation/>
                    {/* <GoogleMapContainer/> */}
                </GridContainer>
            </WrapperContainer2>
        </SectionWrapper>
    );
}

export { SectionContact };