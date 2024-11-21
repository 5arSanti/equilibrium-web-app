import { WrapperContainer2 } from "../../../WrapperContainers";
import { TextCard } from "../../../TextComponents";
import { SubTitle } from "../../../SubTitle";
import { Link } from "react-router-dom";

import "./styles.css"

const ServiceCard = ({item={}}) => {
    return(
        <Link className="service-container">
            <WrapperContainer2 
                flexDirection="column" 
                justifyContent="center" 
                alignItems="start" 
                padding={50} 
                gap={30}
            >
                {item.icon}

                <WrapperContainer2 flexDirection="column" gap={0} padding={0}>
                    <TextCard fontSize={14}>{item.mainSection}</TextCard>
                    <SubTitle>{item.serviceName}</SubTitle>

                </WrapperContainer2>
                <TextCard fontSize={16}>{item.description}</TextCard>

            </WrapperContainer2>
        </Link>
    )
}

export { ServiceCard };