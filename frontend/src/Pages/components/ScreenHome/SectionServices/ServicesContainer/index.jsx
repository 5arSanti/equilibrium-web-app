
import { ServiceCard } from "../ServiceCard";
import { WrapperContainer2 } from "../../../WrapperContainers";
import { egesServices } from "../../../../../utils/EGESServices";
import { GridContainer } from "../../../GridContainer";

const ServicesContainer = () => {
    return(
        <GridContainer className="grid-1-1-1" padding={0} gap={0}>
            {egesServices?.map((item, index) => (
                <ServiceCard 
                    key={index}
                    item={item}
                />
            ))}
        </GridContainer>
    )
}

export { ServicesContainer };