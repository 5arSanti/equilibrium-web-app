import moment from "moment";
import { SpanCard, TextCard } from "../../../TextComponents";
import { WrapperContainer2 } from "../../../WrapperContainers";

import "./styles.css"

const ScheduleCard = ({ schedule={}, selectedValue=null, height="100%" }) => {
    return(
        <WrapperContainer2
            flexDirection="column"
            gap={0}
            padding={5}
            className={`
                schedule-card ${schedule?.ID_Estado_Horario !== 1 && "red-bg"}
                ${selectedValue && selectedValue === schedule.id && "selected"}
            `}
            height={height}
        >
            <TextCard fontSize={14} textAlign="center">
                <SpanCard fontSize={12}>Hora:</SpanCard> <br />
                {moment(schedule.Hora_Inicio, "HH:mm").format("HH:mm A")} - {moment(schedule.Hora_Fin, "HH:mm A").format("HH:mm A")}
            </TextCard>
            <TextCard textAlign="center">
                <SpanCard fontSize={12}>{schedule.Estado}</SpanCard>
            </TextCard>
        </WrapperContainer2>
    )
}

export { ScheduleCard };