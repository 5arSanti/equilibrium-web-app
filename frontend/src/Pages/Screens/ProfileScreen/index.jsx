import React from "react";
import { AuthWrapper } from "../../components/AuthWrapper";
import { IsAuthWrapper } from "../../components/AuthWrapper/IsAuthWrapper";
import { WrapperContainer2 } from "../../components/WrapperContainers";
import { AppContext } from "../../../Context";
import { ProfileInfo } from "../../components/ScreenProfile/ProfileInfo";
import { AppointmentCard } from "../../components/ScreenProfile/AppointmentCard";
import { SubTitle } from "../../components/SubTitle";

const ProfileScreen = () => {
    const { user, fetchData, responseData } = React.useContext(AppContext);
    const { userInfo, appointmentsByUser } = responseData;


    React.useEffect(() => {
        const endpoints = [
            `/users/${user.Cedula_Usuario}`,
            `/appointment/${user.Cedula_Usuario}`,
        ]

        if(user) {
            fetchData(endpoints);
        }

    }, [user]);

    return (
        <AuthWrapper>
            <IsAuthWrapper>
                <WrapperContainer2 flexDirection="column" padding={"50px 125px"}>
                    <ProfileInfo userInfo={userInfo}/>
                    
                    <WrapperContainer2 flexDirection="column" padding={0}>
                        <SubTitle>Citas agendadas</SubTitle>
                        {appointmentsByUser && appointmentsByUser?.map((item, index) => (
                            <AppointmentCard 
                                key={index} 
                                item={item}
                            />
                        ))}
                    </WrapperContainer2>
                </WrapperContainer2>
            </IsAuthWrapper>
        </AuthWrapper>
    )
}

export { ProfileScreen };