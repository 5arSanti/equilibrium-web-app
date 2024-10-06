import { TbMassage } from "react-icons/tb";
import { GiHealthNormal } from "react-icons/gi";
import { MdElderlyWoman } from "react-icons/md";

import { ServiceCard } from "../ServiceCard";
import { WrapperContainer2 } from "../../../WrapperContainers";

const ServicesContainer = () => {
    const services = [
        {
            mainSection: "EQUILIBRIUM",
            serviceName: "CENTRO DE ESTETICA Y SPA",
            icon: <TbMassage/>,
            uri: "",
        },
        {
            mainSection: "EGES",
            serviceName: "SERVICIOS DE SALUD INTEGRAL",
            icon: <GiHealthNormal/>,
            uri: "",
        },
        {
            mainSection: "EGES",
            serviceName: "CENTRO GERIATRICO",
            icon: <MdElderlyWoman/>,
            uri: "",
        },
]

    return(
        <WrapperContainer2 flexDirection="column" justifyContent="center" alignItems="start" padding={20} gap={30}>
            {services?.map((item, index) => (
                <ServiceCard 
                    key={index}
                    item={item}
                />
            ))}
        </WrapperContainer2>
    )
}

export { ServicesContainer };