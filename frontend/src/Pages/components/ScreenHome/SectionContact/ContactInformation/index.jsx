import { contactInfo } from "../../../../../utils/ContactInfo/contactInfo";
import { IconsList } from "../../../IconsList";
import { SubTitle } from "../../../SubTitle";
import { SpanCard, TextCard } from "../../../TextComponents";
import { WrapperContainer2 } from "../../../WrapperContainers";
import { ContactCard } from "../ContactCard";

const ContactInformation = () => {
    const contactKeys = Object.keys(contactInfo) || [];

    return (
        <WrapperContainer2 flexDirection="column" padding={30}>
            <SubTitle>INFORMACION DE CONTACTO</SubTitle>

            {contactKeys?.map((item, index) => (
                <ContactCard key={index} item={item} object={contactInfo}/>
            ))}

            <IconsList justifyContent="start" padding={0}/>
        </WrapperContainer2>
    );
}

export { ContactInformation };