import { contactInfo } from "../../../../../utils/ContactInfo/contactInfo";
import { GridContainer } from "../../../GridContainer";
import { IconsList } from "../../../IconsList";
import { SubTitle } from "../../../SubTitle";
import { WrapperContainer2 } from "../../../WrapperContainers";
import { ContactCard } from "../ContactCard";

const ContactInformation = () => {
    const contactKeys = Object.keys(contactInfo) || [];

    return (
        <WrapperContainer2 flexDirection="column" padding={30}>
            <SubTitle textAlign="end">INFORMACION DE CONTACTO</SubTitle>

            <GridContainer className="grid-175-025" gap={10}>
                <WrapperContainer2 flexDirection="column" gap={10} padding={0} className="reverse">
                    {contactKeys?.map((item, index) => (
                        <ContactCard key={index} item={item} object={contactInfo}/>
                    ))}
                </WrapperContainer2>

                <IconsList flexDirection="column" padding={0} size={40}/>
            </GridContainer>

        </WrapperContainer2>
    );
}

export { ContactInformation };