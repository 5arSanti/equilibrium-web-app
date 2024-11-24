import React from "react";
import { AppContext } from "../../../../../Context";
import { TableContainer } from "../../../TableContainer";

const EntidadesModule = () => {
    const { fetchData } = React.useContext(AppContext);
    
    const [entidadesModule, setEntidadesModule] = React.useState(null);

    React.useEffect(() => {
        const endpoints = [
            `/entidades`,
        ]

        fetchData(endpoints, setEntidadesModule)
    }, []);

    return(
        <>
            <TableContainer data={entidadesModule?.entidades || []}/>
        </>
    );
}

export { EntidadesModule };