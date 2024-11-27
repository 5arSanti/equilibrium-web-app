import React from "react";
import { GridContainer } from "../../../../GridContainer";
import { WrapperContainer2 } from "../../../../WrapperContainers";
import { ButtonCard } from "../../../../ButtonCard";
import { TableContainer } from "../../../../TableContainer";
import { AppContext } from "../../../../../../Context";


const AsociadosList = ({ setModuleData, moduleData={} }) => {
    const { fetchData } = React.useContext(AppContext);

    const [selectedOption, setSelectedOption] = React.useState(null);

    React.useEffect(() => {
        const endpoints = [
            `/services/${selectedOption}/associates/`,
        ]

        if (selectedOption) {
            fetchData(endpoints, setModuleData)
        }
    }, [selectedOption])


    return(
        <GridContainer className="grid-05-15">
            <WrapperContainer2 padding={0} flexDirection="column">
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
        </GridContainer>
    );
};

export { AsociadosList };