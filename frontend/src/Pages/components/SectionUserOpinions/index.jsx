import { opinions } from "../../../utils/opinions";
import { SliderWrapper } from "../SliderWrapper";
import { StyledHome } from "../StyledHome";
import { TextCard } from "../TextComponents";
import { WrapperContainer2 } from "../WrapperContainers";

import { CgQuote } from "react-icons/cg";

import "./styles.css"

const SectionUsersOpinions = () => {
    return(
        <SliderWrapper padding={0} dots={false} arrows={false}>
            {opinions?.map((item, index) => (
                <StyledHome key={index} image={item.image}>
                    <WrapperContainer2 flexDirection="column" justifyContent="center" alignItems="center" padding={"0 200px"} gap={80}>
                        <CgQuote className="quote-icon"/>
                        
                        <TextCard white={true} className="italic" textAlign="center" fontSize={24}>
                            {item.opinion}
                        </TextCard>

                        <TextCard className="animacion2" width="auto" textAlign="center" white={true}>
                            {item.name}
                        </TextCard>
                    </WrapperContainer2>
                </StyledHome>
            ))}
        </SliderWrapper>
    );
}

export { SectionUsersOpinions };