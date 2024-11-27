import React from "react";
import { AsociadosList } from "./AsociadosList";
import { ModulesWrapper } from "../ModulesWrapper";
import { AppContext } from "../../../../../Context";
import { AsociadosForm } from "./AsociadosForm";

const ServiciosAsociadosModule = () => {
    const { fetchData } = React.useContext(AppContext);

    const [selectedOption, setSelectedOption] = React.useState("Lista de servicios");
    const [ moduleData, setModuleData ] = React.useState(null);


    React.useEffect(() => {
        const endpoints = [
            `/services`,
            "/service-category",
            `/service-category/services`
        ]

        fetchData(endpoints, setModuleData)
    }, []);
    

    const options = {
        "Lista de servicios asociados": <AsociadosList moduleData={moduleData} setModuleData={setModuleData}/>,
        "Crear servicio asociado": <AsociadosForm moduleData={moduleData}/>,
    }


    return(
        <ModulesWrapper
            options={options}
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
        />
    );
};

export { ServiciosAsociadosModule };