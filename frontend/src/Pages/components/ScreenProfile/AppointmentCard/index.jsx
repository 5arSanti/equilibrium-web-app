import moment from "moment";
import { formatNumbers } from "../../../../utils/Format/formatNumbers";
import { GridContainer } from "../../GridContainer";
import { LogInfoCard } from "../../LogInfoCard";
import { ScheduleCard } from "../../SchedulesModule/SchedulesTable/ScheduleCard";
import { SubInfoCard } from "../../SubInfoCard";
import { SubTitle } from "../../SubTitle";
import { SpanCard, TextCard } from "../../TextComponents";
import { WrapperContainer2 } from "../../WrapperContainers";

import "./styles.css"
import { FadeWrapper } from "../../FadeWrapper";

const AppointmentCard = ({ item={} }) => {
    return(
        <FadeWrapper>
            <GridContainer className="grid-15-05 border-style" padding={30}>

                <WrapperContainer2 padding={0} flexDirection="column" justifyContent="start" alignItems="start">
                    <SubTitle>Informacion de la cita agendada</SubTitle>
                
                    <TextCard fontSize={16} className="bold">
                        <SpanCard fontSize={16}>Servicio asociado: </SpanCard>{item.Servicio_Asociado}
                    </TextCard>
                    <TextCard fontSize={16} className="bold">
                        <SpanCard fontSize={16}>Coste de la sesion: </SpanCard>{`$ ${formatNumbers(item.Precio)}`}
                    </TextCard>
                    <TextCard fontSize={16} className="bold">
                        <SpanCard fontSize={16}>{item.Estado_Cita} el: </SpanCard>{moment(item.Fecha_Creacion).format("DD/MM/YYYY - HH:mm A")}
                    </TextCard>

                    <SubInfoCard 
                        subTitle={"Observaciones"} 
                        text={item.Observaciones != "null" ? item.Observaciones : "Sin observaciones"} 
                        textSize={14}
                    />
                    <SubInfoCard 
                        subTitle={"Descripcion del servicio"} 
                        text={item.Servicio_Descripcion} 
                        textSize={14}
                    />


                </WrapperContainer2>

                <WrapperContainer2 flexDirection="column" padding={0}>
                    <ScheduleCard schedule={item} day={true}/>
                    <LogInfoCard 
                        width="100%" 
                        padding={"10px 25px"} 
                        text={item.Estado_Cita} 
                        title={"Estado de la cita"}
                        fontSize={16}
                        gap={0}
                    />
                    <LogInfoCard 
                        width="100%" 
                        padding={"10px 25px"} 
                        text={item.Categoria} 
                        title={"Categoria del servicio"}
                        fontSize={16}
                        gap={0}
                    />

                </WrapperContainer2>

            </GridContainer>
        </FadeWrapper>
    )
}

export { AppointmentCard };