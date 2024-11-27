import React from "react";
import { TableContainer } from "../../../TableContainer";
import { AppContext } from "../../../../../Context";
import { WrapperContainer2 } from "../../../WrapperContainers";
import { ButtonCard } from "../../../ButtonCard";

const ServiciosAsociadosModule = () => {
    const { fetchData } = React.useContext(AppContext);

    const [ moduleData, setModuleData ] = React.useState(null);
    const [selectedOption, setSelectedOption] = React.useState(null);


    React.useEffect(() => {
        const endpoints = [
            `/services`,
        ]

        fetchData(endpoints, setModuleData)
    }, []);

    React.useEffect(() => {
        const endpoints = [
            `/services/${selectedOption}/associates/`,
        ]

        if (selectedOption) {
            fetchData(endpoints, setModuleData)
        }
    }, [selectedOption])


    return(
        <>
            <WrapperContainer2 padding={0}>
                {moduleData && moduleData?.mainServices?.map((item, index) => (
                    <ButtonCard 
                        key={index} 
                        title={item.Nombre}
                        onClick={() => setSelectedOption(item.id)}
                    >
                        {item.Nombre}
                    </ButtonCard>
                ))}
            </WrapperContainer2>

            <TableContainer data={moduleData?.associateServices}/>
        </>
    );
};

export { ServiciosAsociadosModule };