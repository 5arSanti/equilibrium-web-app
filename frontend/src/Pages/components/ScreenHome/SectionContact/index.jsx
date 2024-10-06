import { GridContainer } from "../../GridContainer";
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
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.453434772972!2d-75.62280712582997!3d4.863428595112264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38822a9a3132bd%3A0x7b10d1aba80a745!2sCra.%2014%20%2310-32%2C%20Santa%20Rosa%20de%20Cabal%2C%20Risaralda!5e0!3m2!1ses!2sco!4v1728253686144!5m2!1ses!2sco" 
                            width="600" 
                            height="500"
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"    
                        >
                        </iframe>
                    </WrapperContainer3>
                    
                    <ContactInformation/>
                </GridContainer>
            </WrapperContainer2>
        </SectionWrapper>
    );
}

export { SectionContact };