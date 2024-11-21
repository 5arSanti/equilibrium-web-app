import { contactInfo } from "../../../utils/ContactInfo/contactInfo";
import { IconsList } from "../IconsList";
import { TextCard } from "../TextComponents";
import { WrapperContainer2 } from "../WrapperContainers";

import "./styles.css"

const HeaderContact = () => {
    return (
        <WrapperContainer2 
            padding={"15px 150px"} 
            className="header-contact-container" 
            justifyContent="space-between"
            
        >
            <IconsList gap justifyContent="start" size={20} padding={0} white={true}/>

            <TextCard textAlign="end" white={true}>
                {contactInfo["Numero de celular"].icon} {contactInfo["Numero de celular"].info}
            </TextCard>

        </WrapperContainer2>
    )
}

export { HeaderContact };