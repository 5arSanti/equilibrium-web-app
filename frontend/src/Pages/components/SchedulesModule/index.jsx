import React from "react";
import { SubTitle } from "../SubTitle";
import { WrapperContainer2 } from "../WrapperContainers";
import { ScheduleForm } from "./ScheduleForm";
import { SchedulesTable } from "./SchedulesTable";
import { AppContext } from "../../../Context";

const SchedulesModule = ({ associateSchedules }) => {
    const { user } = React.useContext(AppContext);

    const [ values, setValues ] = React.useState({
        Fecha: null,
        Observaciones: null,
        ID_Servicio_Horario: null,
        ID_Usuario: user.Cedula_Usuario,
        ID_Servicio: null,
    })

    return(
        <WrapperContainer2 flexDirection="column" padding={0}>
            <SubTitle fontSize={24}>Agende su cita</SubTitle>

            <SchedulesTable schedulesByDay={associateSchedules}/>

            <ScheduleForm
                state={values}
                setState={setValues}
            />
        </WrapperContainer2>
    );
}

export { SchedulesModule };