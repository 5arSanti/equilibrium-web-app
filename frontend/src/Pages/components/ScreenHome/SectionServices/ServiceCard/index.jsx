import { FaArrowRight } from "react-icons/fa";
import { WrapperContainer1, WrapperContainer2 } from "../../../WrapperContainers";
import { GridContainer } from "../../../GridContainer";
import { TextCard } from "../../../TextComponents";
import { SubTitle } from "../../../SubTitle";
import { ButtonCard } from "../../../ButtonCard";

const ServiceCard = ({item={}}) => {
    return(
        <WrapperContainer1 flexDirection="row" justifyContent="center" alignItems="center" padding={30} gap={30}>
            {item.icon}

            <GridContainer className="grid-15-05" padding={0}>
                <WrapperContainer2 flexDirection="column" gap={0}>
                    <TextCard fontSize={14}>{item.mainSection}</TextCard>
                    <SubTitle>{item.serviceName}</SubTitle>                                                              
                </WrapperContainer2>

                <WrapperContainer2 justifyContent="center" alignItems="center" padding={25}>
                    <ButtonCard 
                        title={`Ir a ${item.serviceName}`}
                    >
                        <FaArrowRight/>
                    </ButtonCard>
                </WrapperContainer2>
            </GridContainer>

        </WrapperContainer1>
    )
}

export { ServiceCard };