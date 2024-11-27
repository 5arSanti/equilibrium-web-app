import React from "react";
import { TableContainer } from "../../../TableContainer";
import { WrapperContainer2 } from "../../../WrapperContainers";
import { AppContext } from "../../../../../Context";
import { ButtonCard } from "../../../ButtonCard";
import { GridContainer } from "../../../GridContainer";
import { NoticiasForm } from "./NoticiasForm";

const NoticiasModule = () => {
    const { fetchData } = React.useContext(AppContext);

    const [serviciosModule, setServiciosModule] = React.useState(null);

    const [selectedOption, setSelectedOption] = React.useState("Lista de servicios");

    React.useEffect(() => {
        const endpoints = [
            `/news`,
            `/news/types`,
            `/service-category`,
        ]

        fetchData(endpoints, setServiciosModule)
    }, []);
    

    const options = {
        "Gestion de Noticias": <TableContainer data={serviciosModule?.news}/>,
        "Crear noticia": <NoticiasForm serviciosModule={serviciosModule}/>,
    }


    return(
        <GridContainer className="grid-05-15">
            <WrapperContainer2 flexDirection="column" gap={20} padding={0}>
                {Object.keys(options).map((item, index) => (
                    <ButtonCard
                        key={index}
                        onClick={() => setSelectedOption(item)}
                        title={item}
                    >
                        {item}
                    </ButtonCard>
                ))}
            </WrapperContainer2>

            <WrapperContainer2 padding={0}>
                {selectedOption && 
                    options[selectedOption]
                }
            </WrapperContainer2>
        </GridContainer>
    );
}

export { NoticiasModule };