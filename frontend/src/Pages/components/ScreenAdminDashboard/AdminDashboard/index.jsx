import React from "react";
import { SectionWrapper } from "../../SectionWrapper";
import { SectionTitle } from "../../SectionWrapper/SectionTitle";
import { AppContext } from "../../../../Context";
import { TextCard } from "../../TextComponents";
import { WrapperContainer2 } from "../../WrapperContainers";
import { AdminOptionButtons } from "../AdminOptionButtons";
import { EntidadesModule } from "../Modules/EntidadesModule";
import { ButtonCard } from "../../ButtonCard";
import { SubTitle } from "../../SubTitle";
import { ServiciosModule } from "../Modules/ServiciosModule";
import { ServiciosAsociadosModule } from "../Modules/ServiciosAsociadosModule";

import { IoMdClose } from "react-icons/io";

import "./styles.css";
import { UsuariosModule } from "../Modules/UsuariosModule";
import { NoticiasModule } from "../Modules/NoticiasModule";


const AdminDashboard = () => {
    const [selectedOption, setSelectedOption] = React.useState(null);

    const { user } = React.useContext(AppContext);

    const options = {
        "Entidades": <EntidadesModule/>,
        "Servicios": <ServiciosModule/>,
        "Servicios asociados": <ServiciosAsociadosModule/>,
        "Usuarios": <UsuariosModule/>,
        "Noticias": <NoticiasModule/>

    }

    return(
        <SectionWrapper>
            <SectionTitle subTitle="Creacion o registro de informacion" title={`Bienvenido/a ${user?.Nombre}`}/>

            <TextCard textAlign="center">
                En esta seccion podras gestionar la informacion del sistema, como la creacion de servicios, entidades, categorias, etc.
            </TextCard>

            <AdminOptionButtons 
                options={options} 
                setSelectedOption={setSelectedOption}
            />

            {selectedOption && 
                <WrapperContainer2 flexDirection="column" padding={"50px 30px 30px 30px "} className="relative">
                    <SubTitle>{selectedOption}</SubTitle>
                    
                    <ButtonCard
                        padding={0}
                        onClick={() => setSelectedOption(null)}
                        title={`Cerrar`}
                        className="delete-graph-button"
                    >
                        <IoMdClose/>
                    </ButtonCard>

                    {options[selectedOption]}
                </WrapperContainer2>
            }

        </SectionWrapper>
    );
}

export { AdminDashboard };