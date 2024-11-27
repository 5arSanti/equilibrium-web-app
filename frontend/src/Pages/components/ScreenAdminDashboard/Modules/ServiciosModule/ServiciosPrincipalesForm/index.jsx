import React from "react";
import { handlePostData } from "../../../../../../utils/handleData/handlePostData";
import { FormWrapper } from "../../../../FormWrapper";
import { InputCard, OptionInputCard, TextAreaCard } from "../../../../InputsCards";
import { handleInputChange } from "../../../../../../utils/handleInputChange";
import { GridContainer } from "../../../../GridContainer";
import { DropCard } from "../../../../DropCard";
import { Icons } from "../../../../../../utils/Icons";
import { ImageInputCard } from "../../../../ImageInputCard";

const ServiciosPrincipalesForm = ({serviciosModule = {}}) => {

    const { entidades } = serviciosModule;

    const [values, setValues] = React.useState({
        Nombre: null,
        Descripcion: null,
        Icono: null,
        Imagen: null,
        ID_Entidad: null,
    })


    const handleSubmit = async (event) => {
        event.preventDefault();

        await handlePostData(event, values, "/news");
    }

    return(
        <FormWrapper onSubmit={handleSubmit}>
            <InputCard
                required={true}
                id={"title"}
                label={"Titulo"}
                placeholder="Ingrese el nombre del servicio"
                value={values.Titulo}
                onChange={(event) => handleInputChange("Titulo", event, setValues)}
            />
            <TextAreaCard
                required={true}
                id={"service-description"}
                label={"Descripcion del servicio"}
                placeholder="Ingrese la descripcion del servicio"
                value={values.Descripcion}
                onChange={(event) => handleInputChange("Descripcion", event, setValues)}
            />
            <GridContainer>
                <OptionInputCard
                    required={true}
                    none={true}
                    id={"news-type"}
                    label={"Seleccione la entidad asociada al servicio"}
                    array={entidades}
                    defaultValue={values.ID_Entidad}
                    onChange={(event) => handleInputChange("ID_Entidad", event, setValues)}
                />
                <DropCard
                    title={"Icono"}
                    array={Object.keys(Icons)}
                    seeAllOption={false}
                    onClick={(event) => handleInputChange("Icono", event, setValues)}
                    value={values.Icono}
                />
            </GridContainer>

            <ImageInputCard
                stateValue={values.Imagen}
                setState={setValues}
                info="Imagen del servicio"
            />


        </FormWrapper>
    );
}

export { ServiciosPrincipalesForm }