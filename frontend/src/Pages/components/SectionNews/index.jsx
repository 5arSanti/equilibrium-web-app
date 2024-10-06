import { SectionWrapper } from "../SectionWrapper";
import { SectionTitle } from "../SectionWrapper/SectionTitle";
import { WrapperContainer2 } from "../WrapperContainers";
import { SliderNews } from "./SliderNews";

const SectionNews = () => {
    return(
        <SectionWrapper >
            <WrapperContainer2 flexDirection="column" gap={0} paddingVertical={70}>
                <SectionTitle title="NOTICIAS" subTitle="ULTIMAS"/>

                <SliderNews/>
            </WrapperContainer2>
        </SectionWrapper>
    );
}

export { SectionNews };