import React from "react";
import { AuthWrapper } from "../../components/AuthWrapper";
import { IsAuthWrapper } from "../../components/AuthWrapper/IsAuthWrapper";
import { GridContainer } from "../../components/GridContainer";
import { Title } from "../../components/Title";
import { WrapperContainer2 } from "../../components/WrapperContainers";
import { AppContext } from "../../../Context";
import { ImageParserCard } from "../../components/ImageParserCard";
import { SectionWrapper } from "../../components/SectionWrapper";

const ProfileScreen = () => {
    const { user, fetchData, responseData } = React.useContext(AppContext);

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
                    <GridContainer className="grid-05-15" gap={50}>
                        <WrapperContainer2 padding={0}>
                            <ImageParserCard 
                                data={responseData?.user}
                            />
                        </WrapperContainer2>

                        <WrapperContainer2 
                            flexDirection="column" 
                            padding={0}
                            justifyContent="start"
                            alignItems="start"
                        >
                            <Title 
                                textAlign="start" 
                                width="auto"
                            >
                                {responseData?.user?.Nombre} {responseData?.user?.Apellidos}
                            </Title>
                        </WrapperContainer2>
                    </GridContainer>
                </WrapperContainer2>
            </IsAuthWrapper>
        </AuthWrapper>
    )
}

export { ProfileScreen };