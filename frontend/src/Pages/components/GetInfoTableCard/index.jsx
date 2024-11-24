import React from "react";
import { AppContext } from "../../../Context";
import { TableContainer } from "../TableContainer";

const GetInfoTableCard = ({endpoint}) => {
    const { fetchData, responseData } = React.useContext(AppContext);

    React.useEffect(() => {
        fetchData([`/${endpoint}`])
    }, []);

    return(
        <TableContainer data={responseData?.[endpoint] || []}/>
    );
}


export { GetInfoTableCard };