import { SectionWrapper } from "../../SectionWrapper";
import { TextCard } from "../../TextComponents";
import { Title } from "../../Title";
import { WrapperContainer2 } from "../../WrapperContainers";

const SectionAboutUs = () => {
    return(
        <SectionWrapper padding={30}>
            <WrapperContainer2 flexDirection="column" padding={125}>
                <WrapperContainer2 flexDirection="column" gap={0}>
                    <TextCard fontSize={12} textAlign="center">Somos</TextCard>
                    <Title>EQUILIBRIUM EGES</Title>
                </WrapperContainer2>

                <TextCard textAlign="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas beatae nam fugiat soluta hic quo sequi quae assumenda rerum commodi voluptatum quasi molestiae aliquam corporis cupiditate, molestias sit laboriosam ipsa!</TextCard>

            </WrapperContainer2>
        </SectionWrapper>
    );
}

export { SectionAboutUs };