import React from "react";

import { AppContext } from "../../../Context";

import { AuthWrapper } from "../../components/AuthWrapper";
import { handleInputChange } from "../../../utils/handleInputChange";
import { InputCard, OptionInputCard } from "../../components/InputsCards";
import { handlePostData } from "../../../utils/handleData/handlePostData";
import { StyledSection } from "../../components/StyledSection";
import { WrapperContainer2 } from "../../components/WrapperContainers";
import { FadeWrapper } from "../../components/FadeWrapper";
import { SectionTitle } from "../../components/SectionWrapper/SectionTitle";
import { TextCard } from "../../components/TextComponents";
import { GridContainer } from "../../components/GridContainer";
import { ImageInputCard } from "../../components/ImageInputCard";

const RegisterScreen = () => {
    const { setLoading, fetchData, responseData } = React.useContext(AppContext);

    const [values, setValues] = React.useState({
        Cedula_Usuario: null,
        Nombre: null,
        Apellidos: null,
        Correo: null,
        Contraseña: null,
        Confirmar_Contraseña: null,
        Imagen: null,
        ID_Genero: null,
    })

    const handleRegister = async (event) => {
        event.preventDefault();

        setLoading(true);

        await handlePostData(event, values, "/users/new");
        
        setLoading(false);
    }

    React.useEffect(() => {
        fetchData(["genres"])
    }, [])

    return(

        <AuthWrapper>
            <StyledSection height="auto">
                <FadeWrapper>
                    <WrapperContainer2 padding={30} flexDirection="column" justifyContent="center" alignItems="center">
                        <SectionTitle white={true} title="Cree su cuenta" subTitle="Bienvenido"/>

                        <WrapperContainer2 
                            className="login-container" 
                            flexDirection="column"
                            padding={"50px 75px"} gap={30}
                            height="auto"
                        >
                            <TextCard textAlign="center" white={true} fontSize={18}>
                                Registrese en el sistema
                            </TextCard>

                            <GridContainer className="grid-075-125" gap={30}>
                                <ImageInputCard stateValue={values?.Imagen} setState={setValues}/>

                                <form className="login-form-container" onSubmit={handleRegister}>
                                    <InputCard
                                        id={"user-id"}
                                        label={"Cedula:"}
                                        placeholder="Ingrese su numero de cédula"
                                        onChange={(event) => handleInputChange("Cedula_Usuario", event, setValues)}
                                        defaultValue={values?.Cedula_Usuario}
                                    />
                                    
                                    <GridContainer>
                                        <InputCard
                                            id={"name"}
                                            label={"Nombre:"}
                                            placeholder="Ingrese su nombre"
                                            onChange={(event) => handleInputChange("Nombre", event, setValues)}
                                            defaultValue={values?.Nombre}
                                        />
                                        <InputCard
                                            id={"surnames"}
                                            label={"Apellidos:"}
                                            placeholder="Ingrese los apellidos"
                                            onChange={(event) => handleInputChange("Apellidos", event, setValues)}
                                            defaultValue={values?.Apellidos}
                                        />
                                    </GridContainer>
                                    <InputCard
                                        type="email"
                                        id={"email"}
                                        label={"Correo:"}
                                        placeholder="Ingrese su correo"
                                        onChange={(event) => handleInputChange("Correo", event, setValues)}
                                        defaultValue={values?.Correo}
                                    />
                                    <GridContainer padding={0}>
                                        <InputCard
                                            type="password"
                                            id={"password"}
                                            label={"Contraseña:"}
                                            placeholder="Ingrese su contraseña"
                                            onChange={(event) => handleInputChange("Contraseña", event, setValues)}
                                            defaultValue={values?.Contraseña}
                                        />
                                        <InputCard
                                            type="password"
                                            id={"confirm-password"}
                                            label={"Confirmar Contraseña:"}
                                            placeholder="Ingrese su contraseña"
                                            onChange={(event) => handleInputChange("Confirmar_Contraseña", event, setValues)}
                                            defaultValue={values?.Confirmar_Contraseña}
                                        />
                                    </GridContainer>

                                    <OptionInputCard
                                        id={"user-gender"}
                                        label={"Genero"}
                                        none={true}
                                        array={responseData?.genres}
                                        onChange={(event) => handleInputChange("ID_Genero", event, setValues)}
                                        defaultValue={values?.ID_Genero}
                                        required={true}
                                    />
                                    
                                    <button type="submit">Crear cuenta</button>
                                </form>
                            </GridContainer>
                        </WrapperContainer2>
                    </WrapperContainer2>
                </FadeWrapper>
            </StyledSection>
        </AuthWrapper>
    );
}

export { RegisterScreen }