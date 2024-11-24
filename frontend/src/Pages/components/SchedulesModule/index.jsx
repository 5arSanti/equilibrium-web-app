import React from "react";
import { SubTitle } from "../SubTitle";
import { WrapperContainer2 } from "../WrapperContainers";
import { ScheduleForm } from "./ScheduleForm";
import { SchedulesTable } from "./SchedulesTable";
import { AppContext } from "../../../Context";

const SchedulesModule = ({ serviceID, associateSchedules }) => {
    const { user, fetchData } = React.useContext(AppContext);

    const [ values, setValues ] = React.useState({
        Fecha: null,
        Observaciones: null,
        ID_Servicio_Horario: null,
        ID_Usuario: user?.id,
        ID_Servicio: serviceID,
    })

    React.useEffect(() => {
        const endpoints = [
            `/schedules/${values?.ID_Servicio_Horario}`
        ]

        if(serviceID) {
            fetchData(endpoints)
        }

    }, [values?.ID_Servicio_Horario])

    return(
        <WrapperContainer2 flexDirection="column" padding={0}>
            <SubTitle fontSize={24}>Agende su cita</SubTitle>

            <SchedulesTable 
                schedulesByDay={associateSchedules}
                setState={setValues}
                selectedValue={values.ID_Servicio_Horario}
            />

            <ScheduleForm
                state={values}
                setState={setValues}
            />
        </WrapperContainer2>
    );
}

export { SchedulesModule };