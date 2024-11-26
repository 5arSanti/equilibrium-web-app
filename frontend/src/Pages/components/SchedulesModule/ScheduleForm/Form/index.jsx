import React from "react";
import { IoIosSend } from "react-icons/io";
import { WrapperContainer2 } from "../../../WrapperContainers";
import { InputCard, OptionInputCard, TextAreaCard } from "../../../InputsCards";
import { GridContainer } from "../../../GridContainer";
import { ButtonCard } from "../../../ButtonCard";
import { AppContext } from "../../../../../Context";

import "./styles.css"
import { ScheduleCard } from "../../SchedulesTable/ScheduleCard";
import { TextCard } from "../../../TextComponents";
import { handleInputChange } from "../../../../../utils/handleInputChange";

const Form = ({ state={}, setState }) => {
    const { associateServices, schedule } = React.useContext(AppContext).responseData;

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <WrapperContainer2 justifyContent="start" alignItems="center" padding={40} gap={20} flexDirection="column">
                <OptionInputCard
                    none={true}
                    id={"associate-service"}
                    label={"Seleccione el servicio"}
                    array={associateServices}
                    defaultValue={state.ID_Servicio}
                    onChange={null}
                />

                <WrapperContainer2 flexDirection="column" padding={0} gap={5} height="auto">
                    <TextCard className="bold">Horario seleccionado</TextCard>
                    {schedule ?
                        <div style={{border: "1px solid var(--pallete-1)", width: "100%" }}>
                            <ScheduleCard
                                schedule={schedule}
                                height="auto"
                                day={true}
                            />
                        </div>
                    :
                        <div style={{border: "1px solid var(--pallete-1)", width: "100%" }}>
                            <WrapperContainer2 className="schedule-card">
                                <TextCard className="bold" textAlign="center">No se ha seleccionado un horario</TextCard>
                            </WrapperContainer2>
                        </div>
                    }
                </WrapperContainer2>
                <TextAreaCard
                    required={false}
                    id={"observations"}
                    label={"Observaciones"}
                    placeholder="Ingrese aqui sus observaciones"
                    value={state.Observaciones}
                    setState={setState}
                    onChange={(event) => handleInputChange("Observaciones", event, setState)}
                />

                <ButtonCard 
                    title="Enviar información del curso"
                    type="submit"
                >
                    Agendar cita <IoIosSend/>
                </ButtonCard>
            </WrapperContainer2>
        </form>
    );
}

export { Form };