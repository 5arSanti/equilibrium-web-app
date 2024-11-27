import { formatNumbers } from "../../../../utils/Format/formatNumbers";
import { FadeWrapper } from "../../FadeWrapper";
import { GridContainer } from "../../GridContainer";
import { ImageParserCard } from "../../ImageParserCard";
import { SubInfoCard } from "../../SubInfoCard";
import { SubTitle } from "../../SubTitle";
import { TextCard } from "../../TextComponents";
import { Title } from "../../Title";
import { WrapperContainer2 } from "../../WrapperContainers";

const ProfileInfo = ({ userInfo={} }) => {
    return(
        <FadeWrapper>
            <GridContainer className="grid-05-15" gap={50}>
                <WrapperContainer2 padding={0} flexDirection="column">
                    <ImageParserCard 
                        data={userInfo}
                        style={true}
                    />
                    <SubInfoCard
                        textAlign="center"
                        subTitle={"Imagen de perfil"}
                    />
                </WrapperContainer2>

                <WrapperContainer2 
                    flexDirection="column" 
                    padding={0}
                    gap={30}
                    justifyContent="start"
                    alignItems="start"
                >
                    <WrapperContainer2 flexDirection="column" height="auto" justifyContent="start" alignItems="start" padding={0}>
                        <TextCard fontSize={14}>
                            {userInfo?.ID_Genero === 1 ? "¡Bienvenida!" : "¡Bienvenido!"}
                        </TextCard>
                        <Title 
                            textAlign="start" 
                            width="auto"
                            padding={0}
                        >
                            {userInfo?.Nombre} {userInfo?.Apellidos}
                        </Title>
                        
                        <TextCard>En esta seccion podrá encontrar toda la informacion de su usuario</TextCard>
                    </WrapperContainer2>

                    <SubTitle>Informacion personal</SubTitle>
                    <GridContainer>
                        <SubInfoCard 
                            text={formatNumbers(userInfo.Cedula_Usuario)} 
                            subTitle={"Cedula de ciudadania"}
                        />
                        <SubInfoCard
                            text={userInfo.Genero} 
                            subTitle={"Genero"}
                        />
                        <SubInfoCard
                            text={userInfo.Correo} 
                            subTitle={"Correo electronico"}
                        />
                        <SubInfoCard
                            text={userInfo.Tipo_Usuario} 
                            subTitle={"Tipo de usuario"}
                        />

                    </GridContainer>
                </WrapperContainer2>
            </GridContainer>
        </FadeWrapper>
    );
}

export { ProfileInfo };