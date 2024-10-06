import { SpanCard, TextCard } from "../../../TextComponents";
import { WrapperContainer1 } from "../../../WrapperContainers";

const ContactCard = ({item={}, object={}}) => {

    return (
        <WrapperContainer1 flexDirection="column" padding={20} alignItems="end">
            <TextCard textAlign="end"><SpanCard fontSize={14}>{item}</SpanCard></TextCard>

            <TextCard textAlign="end">{object[item].icon} {object[item]?.info}</TextCard>

        </WrapperContainer1>
    );
}

export { ContactCard };