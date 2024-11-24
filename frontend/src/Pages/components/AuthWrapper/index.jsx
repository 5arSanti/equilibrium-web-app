import React from "react";
import axios from "axios"

import { AppContext } from "../../../Context";
import { useNavigate } from "react-router-dom";
import { handleNotifications } from "../../../utils/handleNotifications";
import { api } from "../../../utils/api";
import { handleAdmin } from "../../../utils/HandleAuth/handleAdmin";
import { handleAuthRequest } from "../../../utils/HandleAuth/handleAuthRequest";

const AuthWrapper = ({children}) => {
    const context = React.useContext(AppContext);

    const navigate = useNavigate();

    React.useEffect(() => {
        handleAuthRequest(context, navigate)
    }, []);


    React.useEffect(() => {
        handleAdmin(context.user, context.setAdmin)
    }, [context.user])


    return (
        children
    );
}

export { AuthWrapper }