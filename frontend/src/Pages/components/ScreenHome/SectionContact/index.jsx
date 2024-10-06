import { GridContainer } from "../../GridContainer";
import { SectionWrapper } from "../../SectionWrapper";
import { SectionTitle } from "../../SectionWrapper/SectionTitle";
import { WrapperContainer1, WrapperContainer2 } from "../../WrapperContainers";
import { ContactInformation } from "./ContactInformation";

const SectionContact = () => {
    return(
        <SectionWrapper padding={30}>
            <WrapperContainer2 flexDirection="column" padding={100}>
                <SectionTitle title="CONTACTANOS" subTitle="QUE ESTAS ESPERANDO..."/>

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