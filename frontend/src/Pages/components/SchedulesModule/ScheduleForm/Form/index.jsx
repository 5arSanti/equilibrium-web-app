import React from "react";
import { IoIosSend } from "react-icons/io";
import { WrapperContainer2 } from "../../../WrapperContainers";
import { InputCard, OptionInputCard } from "../../../InputsCards";
import { GridContainer } from "../../../GridContainer";
import { ButtonCard } from "../../../ButtonCard";
import { AppContext } from "../../../../../Context";

import "./styles.css"
import { ScheduleCard } from "../../SchedulesTable/ScheduleCard";

const Form = ({ state={}, setState }) => {
    const { associateServices, schedule } = React.useContext(AppContext).responseData;

    console.log(schedule)

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
                />

                <ScheduleCard
                    schedule={schedule}
                    height="auto"
                />
                
                <GridContainer className="grid-1-1" padding={0}>
                    <OptionInputCard
                        none={true}
                        id={"process"}
                        label={"¿En proceso?"}
                        array={["Si", "No"]}
                    />
                    <InputCard 
                        id={"executer"}
                        label={"Ejecutor"}
                    />
                    <InputCard 
                        id={"coordinator"}
                        label={"Coordinador"}
                    />
                    <InputCard
                        id={"students-amount"}
                        label={"Cantidad de estudiantes"}
                    />
                    <OptionInputCard
                        none={true}
                        id={"course-schedule"}
                        label={"Jornada del curso"}
                        array={["Jornada Mañana", "Jornada Tarde"]}
                    />
                </GridContainer>

                <ButtonCard 
                    title="Enviar información del curso"
                    type="submit"
                >
                    Enviar información <IoIosSend/>
                </ButtonCard>
            </WrapperContainer2>
        </form>
    );
}

export { Form };