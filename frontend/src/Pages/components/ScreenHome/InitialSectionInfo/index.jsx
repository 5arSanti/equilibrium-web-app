import { TextCard } from "../../TextComponents";
import { Title } from "../../Title";
import { WrapperContainer2 } from "../../WrapperContainers";

const InitialSectioninfo = () => {
    return (
        <WrapperContainer2 justifyContent="center" alignItems="center" gap={5} flexDirection="column">
            <TextCard textAlign="center" fontSize={12}>Bienvenido a</TextCard>

            <Title>EGES</Title>

            <TextCard textAlign="center">GRUPO EMPRESARIAL DE LA SALUD</TextCard>
        </WrapperContainer2>
    );
}

export { InitialSectioninfo };