import React from "react";
import { SubTitle } from "../SubTitle";
import { WrapperContainer2 } from "../WrapperContainers";
import { ScheduleForm } from "./ScheduleForm";
import { SchedulesTable } from "./SchedulesTable";
import { AppContext } from "../../../Context";
import { TextCard } from "../TextComponents";

const SchedulesModule = ({ serviceID, associateSchedules }) => {
    const { user, fetchData } = React.useContext(AppContext);

    const [ values, setValues ] = React.useState({
        Observaciones: null,
        ID_Servicio_Horario: null,
        ID_Usuario: user?.Cedula_Usuario || null,
        ID_Servicio: serviceID,
    })

    React.useEffect(() => {
        if (user?.Cedula_Usuario !== values.ID_Usuario) {
            setValues(prevValues => ({
                ...prevValues,
                ID_Usuario: user.Cedula_Usuario,
            }));
        }
    }, [user, values.ID_Usuario]);

    React.useEffect(() => {
        const endpoints = [
            `/schedules/${values?.ID_Servicio_Horario}`
        ]


        if (serviceID) {
            fetchData(endpoints)
        }

    }, [values?.ID_Servicio_Horario])

    return(
        <WrapperContainer2 flexDirection="column" padding={0} gap={30}>
            <SubTitle fontSize={24}>Agende su cita</SubTitle>
            
            <WrapperContainer2 flexDirection="column" gap={5} padding={0}>
                <TextCard>A continuacion puede encontrar una tabla con los horarios de disponibilidad de la semana</TextCard>
                <TextCard>Pulse con ayuda de su raton sobre algun horario para seleccionarlo</TextCard>
            </WrapperContainer2>

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