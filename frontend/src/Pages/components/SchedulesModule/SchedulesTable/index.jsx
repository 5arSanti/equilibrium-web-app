import { WrapperContainer2 } from "../../WrapperContainers";
import { handleInputChange } from "../../../../utils/handleInputChange";
import { ScheduleCard } from "./ScheduleCard";

const SchedulesTable = ({ schedulesByDay = {}, setState, selectedValue }) => {
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
                <tr>
                    {headers?.map((day, index) => (
                        <td key={index} style={{padding: 0}}>
                            <WrapperContainer2 
                                flexDirection="column"
                                gap={0}
                                padding={0}
                            >
                                {schedulesByDay[day]?.map((schedule, idx) => (
                                    <div 
                                        key={idx}
                                        style={{width: "100%", height: "100%"}}
                                        onClick={() => handleInputChange("ID_Servicio_Horario", schedule.id, setState)}
                                    >
                                        <ScheduleCard
                                            schedule={schedule}
                                            selectedValue={selectedValue}
                                        />
                                    </div>
                                ))}
                            </WrapperContainer2>
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>
    );
};

export { SchedulesTable };
