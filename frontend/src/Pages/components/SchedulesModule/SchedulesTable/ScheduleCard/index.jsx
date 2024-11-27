import moment from "moment";
import { SpanCard, TextCard } from "../../../TextComponents";
import { WrapperContainer2 } from "../../../WrapperContainers";

import "./styles.css"

const ScheduleCard = ({ schedule={}, selectedValue=null, height="100%", day=false }) => {
    return(
        <WrapperContainer2
            flexDirection="column"
            gap={0}
            padding={5}
            className={`
                schedule-card ${schedule?.ID_Estado_Horario === 0 && "red-bg"}
                ${selectedValue && selectedValue === schedule.id && "selected"}
            `}
            height={height}
            justifyContent="center" 
            alignItems="center"
        >
            {day && 
                <TextCard textAlign="center">
                    <SpanCard fontSize={12}>Dia</SpanCard> <br />
                    {schedule.Dia}
                </TextCard>
            }
            <TextCard fontSize={14} textAlign="center">
                <SpanCard fontSize={12}>Hora:</SpanCard> <br />
                {moment(schedule.Hora_Inicio, "HH:mm").format("HH:mm A")} - {moment(schedule.Hora_Fin, "HH:mm A").format("HH:mm A")}
            </TextCard>

            {schedule.Estado &&
                <TextCard textAlign="center">
                    <SpanCard fontSize={12}>{schedule.Estado}</SpanCard>
                </TextCard>
            }
        </WrapperContainer2>
    )
}

export { ScheduleCard };