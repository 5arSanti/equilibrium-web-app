import moment from "moment";
import { SpanCard, TextCard } from "../TextComponents";
import { WrapperContainer2 } from "../WrapperContainers";

import "./styles.css"

const SchedulesTable = ({ schedulesByDay = {} }) => {
    const headers = Object.keys(schedulesByDay);

    return (
        <table className="table-container">
            <thead>
                <tr>
                    {headers?.map((day, index) => (
                        <th key={index} style={{ textAlign: 'center' }}>
                            {day}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {headers?.map((day, index) => (
                    <td key={index} style={{padding: 0}}>
                        <WrapperContainer2 
                            flexDirection="column"
                            gap={0}
                            padding={0}
                        >
                            {schedulesByDay[day]?.map((schedule, idx) => (
                                <WrapperContainer2 key={idx}
                                    flexDirection="column"
                                    gap={0}
                                    padding={5}
                                    className={`schedule-card ${schedule?.ID_Estado_Horario !== 1 && "red-bg"}`}
                                >
                                    <TextCard fontSize={14} textAlign="center">
                                        <SpanCard fontSize={12}>Hora:</SpanCard> <br />
                                        {moment(schedule.Hora_Inicio, "HH:mm").format("HH:mm A")} - {moment(schedule.Hora_Fin, "HH:mm A").format("HH:mm A")}
                                    </TextCard>
                                    <TextCard textAlign="center">
                                        <SpanCard fontSize={12}>{schedule.Estado}</SpanCard>
                                    </TextCard>
                                </WrapperContainer2>
                            ))}
                        </WrapperContainer2>
                    </td>
                ))}
            </tbody>
        </table>
    );
};

export { SchedulesTable };
