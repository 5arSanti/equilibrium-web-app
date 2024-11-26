import React from "react";
import { AuthWrapper } from "../../components/AuthWrapper";
import { IsAuthWrapper } from "../../components/AuthWrapper/IsAuthWrapper";
import { WrapperContainer2 } from "../../components/WrapperContainers";
import { AppContext } from "../../../Context";
import { ProfileInfo } from "../../components/ScreenProfile/ProfileInfo";

const ProfileScreen = () => {
    const { user, fetchData, responseData } = React.useContext(AppContext);
    const { userInfo } = responseData;

    console.log(userInfo)

    React.useEffect(() => {
        const endpoints = [
            `users/${user.Cedula_Usuario}`
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

                </WrapperContainer2>
            </IsAuthWrapper>
        </AuthWrapper>
    )
}

export { ProfileScreen };