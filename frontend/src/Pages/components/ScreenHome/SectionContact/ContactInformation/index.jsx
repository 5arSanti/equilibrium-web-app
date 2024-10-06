import { contactInfo } from "../../../../../utils/ContactInfo/contactInfo";
import { SubTitle } from "../../../SubTitle";
import { SpanCard, TextCard } from "../../../TextComponents";
import { WrapperContainer2 } from "../../../WrapperContainers";

const ContactInformation = () => {
    const contactKeys = Object.keys(contactInfo) || [];

    return (
        <WrapperContainer2 flexDirection="column">
            <SubTitle>INFORMACION DE CONTACTO</SubTitle>

            {contactKeys?.map((item, index) => (
                <WrapperContainer2 key={index} flexDirection="column">
                    <TextCard><SpanCard >{item}</SpanCard></TextCard>

                    <TextCard>{contactInfo[item].icon} {contactInfo[item]?.info}</TextCard>

                </WrapperContainer2>
            ))}
        </WrapperContainer2>
    );
}

export { ContactInformation };