import { SpanCard, TextCard } from "../../../TextComponents";
import { WrapperContainer2 } from "../../../WrapperContainers";

const ContactCard = ({item={}, object={}}) => {

    return (
        <WrapperContainer2 flexDirection="column" padding={5}>
            <TextCard><SpanCard fontSize={12}>{item}</SpanCard></TextCard>

            <TextCard>{object[item].icon} {object[item]?.info}</TextCard>

        </WrapperContainer2>
    );
}

export { ContactCard };