import React from "react";
import { AppContext } from "../../../../../Context";
import { TableContainer } from "../../../TableContainer";

const UsuariosModule = () => {
    const { fetchData } = React.useContext(AppContext);
    
    const [entidadesModule, setEntidadesModule] = React.useState(null);

    React.useEffect(() => {
        const endpoints = [
            `/users`,
        ]

        fetchData(endpoints, setEntidadesModule)
    }, []);

    return(
        <>
            <TableContainer data={entidadesModule?.users || []}/>
        </>
    );
}

export { UsuariosModule };