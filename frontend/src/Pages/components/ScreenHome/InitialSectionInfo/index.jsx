import { contactInfo } from "../../../../utils/ContactInfo/contactInfo";
import { IconsList } from "../../IconsList";
import { TextCard } from "../../TextComponents";
import { Title } from "../../Title";
import { WrapperContainer2 } from "../../WrapperContainers";

const InitialSectioninfo = () => {
    return (
        <WrapperContainer2 justifyContent="center" alignItems="center" gap={5} flexDirection="column" paddingVertical={80}>
            <TextCard white={true} textAlign="center" fontSize={11}>Bienvenido a</TextCard>

            <WrapperContainer2 justifyContent="center" alignItems="center" gap={5} flexDirection="column">
                <Title>EQUILIBRIUM EGES</Title>
                <TextCard white={true} textAlign="center">GRUPO EMPRESARIAL DE LA SALUD</TextCard>

            </WrapperContainer2>

            <div>
                <TextCard white={true} textAlign="center" fontSize={12}>{contactInfo["Numero de celular"].info}</TextCard>
                <IconsList padding={10} white={true}/>
            </div>


        </WrapperContainer2>
    );
}

export { InitialSectioninfo };