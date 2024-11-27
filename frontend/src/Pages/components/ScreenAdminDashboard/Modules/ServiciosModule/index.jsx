import React from "react";
import { TableContainer } from "../../../TableContainer";
import { AppContext } from "../../../../../Context";
import { ModulesWrapper } from "../ModulesWrapper";
import { ServiciosPrincipalesForm } from "./ServiciosPrincipalesForm";

const ServiciosModule = () => {
    const { fetchData } = React.useContext(AppContext);

    const [serviciosModule, setServiciosModule] = React.useState(null);

    const [selectedOption, setSelectedOption] = React.useState("Lista de servicios");

    React.useEffect(() => {
        const endpoints = [
            `/services`,
            `/entidades`
        ]

        fetchData(endpoints, setServiciosModule)
    }, []);
    

    const options = {
        "Lista de servicios": <TableContainer data={serviciosModule?.mainServices}/>,
        "Crear servicio principal": <ServiciosPrincipalesForm serviciosModule={serviciosModule}/>,
    }


    return(
        <ModulesWrapper
            options={options}
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
        />
    );
}

export { ServiciosModule };