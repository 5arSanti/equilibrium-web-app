
import { ServiceCard } from "../ServiceCard";
import { WrapperContainer2 } from "../../../WrapperContainers";
import { egesServices } from "../../../../../utils/EGESServices";
import { GridContainer } from "../../../GridContainer";
import { AppContext } from "../../../../../Context";
import React from "react";

const ServicesContainer = () => {
    const context = React.useContext(AppContext);

    const { mainServices } = context.responseData;

    return(
        <GridContainer className="grid-1-1-1" padding={0} gap={0}>
            {mainServices?.map((item, index) => (
                <ServiceCard 
                    key={index}
                    item={item}
                />
            ))}
        </GridContainer>
    )
}

export { ServicesContainer };