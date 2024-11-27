import { SectionTitle } from "../SectionWrapper/SectionTitle";
import { WrapperContainer2 } from "../WrapperContainers";
import { SliderNews } from "./SliderNews";

const SectionNews = () => {
    return(
        <WrapperContainer2 flexDirection="column" gap={0} padding={30}>
            <SectionTitle title="NOTICIAS" subTitle="ULTIMAS"/>

            <SliderNews/>
        </WrapperContainer2>
    );
}

export { SectionNews };