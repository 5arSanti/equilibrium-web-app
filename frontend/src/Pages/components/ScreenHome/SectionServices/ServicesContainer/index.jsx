
import { ServiceCard } from "../ServiceCard";
import { WrapperContainer2 } from "../../../WrapperContainers";
import { egesServices } from "../../../../../utils/EGESServices";

const ServicesContainer = () => {
    return(
        <WrapperContainer2 flexDirection="column" justifyContent="center" alignItems="start" padding={20} gap={30}>
            {egesServices?.map((item, index) => (
                <ServiceCard 
                    key={index}
                    item={item}
                />
            ))}
        </WrapperContainer2>
    )
}

export { ServicesContainer };