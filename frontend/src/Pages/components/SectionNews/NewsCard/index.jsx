import { SubTitle } from "../../SubTitle";
import { SpanCard, TextCard } from "../../TextComponents";
import { WrapperContainer2, WrapperContainer3 } from "../../WrapperContainers";

import moment from "moment"

import "./styles.css"

const NewsCard = ({item={}}) => {
    return (
        <WrapperContainer2 padding={20} >
            <WrapperContainer3 gap={0} padding={0} flexDirection="column" className="news-card-container">
                <div className="news-card-img">
                    <img src={item?.image} alt="Logo" />
                </div>

                <WrapperContainer2 flexDirection="column" gap={0}>
                    <TextCard textAlign="start"><SpanCard fontSize={12}>{moment(item?.date).format("DD/MM/YYYY")}</SpanCard></TextCard>
                    <SubTitle>{item?.title}</SubTitle>
                </WrapperContainer2>


            </WrapperContainer3>
        </WrapperContainer2>
    );
}

export { NewsCard }; 