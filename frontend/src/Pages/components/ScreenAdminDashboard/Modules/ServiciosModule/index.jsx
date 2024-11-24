import React from "react";
import { WrapperContainer2 } from "../../../WrapperContainers";
import { TableContainer } from "../../../TableContainer";
import { AppContext } from "../../../../../Context";

const ServiciosModule = () => {
    const { fetchData } = React.useContext(AppContext);

    const [serviciosModule, setServiciosModule] = React.useState(null);

    const [selectedOption, setSelectedOption] = React.useState("Lista de servicios");

    React.useEffect(() => {
        const endpoints = [
            `/services`,
        ]

        fetchData(endpoints, setServiciosModule)
    }, []);
    

    const options = {
        "Lista de servicios": <TableContainer data={serviciosModule?.mainServices}/>,
    }


    return(
        <>
            {/* <WrapperContainer2 flexDirection="column" gap={20} padding={0}>
                {Object.keys(options).map((item, index) => (
                    <ButtonCard
                        key={index}
                        onClick={() => setSelectedOption(item)}
                        title={item}
                    >
                        {item}
                    </ButtonCard>
                ))}
            </WrapperContainer2> */}

            <WrapperContainer2 padding={0}>
                {selectedOption && 
                    options[selectedOption]
                }
            </WrapperContainer2>
        </>
    );
}

export { ServiciosModule };