import React from "react";
import { handlePostData } from "../../../../../../utils/handleData/handlePostData";
import { FormWrapper } from "../../../../FormWrapper";
import { InputCard, OptionInputCard, TextAreaCard } from "../../../../InputsCards";
import { handleInputChange } from "../../../../../../utils/handleInputChange";
import { GridContainer } from "../../../../GridContainer";
import { ImageInputCard } from "../../../../ImageInputCard";
import { ButtonCard } from "../../../../ButtonCard";

const AsociadosForm = ({moduleData = {}}) => {

    const { noDetailsServices, servicesCategories } = moduleData;

    const [values, setValues] = React.useState({
        Nombre: null,
        Descripcion: null,
        Imagen: null,
        Precio: null,
        ID_Categoria: null,
        ID_Servicio_Principal: null
    })


    const handleSubmit = async (event) => {
        event.preventDefault();

        await handlePostData(event, values, "/associates");
    }

    return(
        <FormWrapper onSubmit={handleSubmit}>
            <InputCard
                required={true}
                id={"name"}
                label={"Nombre"}
                placeholder="Ingrese el nombre del servicio asociado"
                value={values.Nombre}
                onChange={(event) => handleInputChange("Nombre", event, setValues)}
            />
            <TextAreaCard
                required={true}
                id={"associate-description"}
                label={"Descripcion del servicio"}
                placeholder="Ingrese la descripcion del servicio"
                value={values.Descripcion}
                onChange={(event) => handleInputChange("Descripcion", event, setValues)}
            />
            <InputCard
                required={true}
                id={"price"}
                label={"Precio del servicio"}
                placeholder="Ingrese el precio del servicio"
                value={values.Precio}
                onChange={(event) => handleInputChange("Precio", event, setValues)}
            />
            <GridContainer>
                <OptionInputCard
                    required={true}
                    none={true}
                    id={"service"}
                    label={"Seleccione el servicio"}
                    array={noDetailsServices}
                    defaultValue={values.ID_Servicio_Principal}
                    onChange={(event) => handleInputChange("ID_Servicio_Principal", event, setValues)}
                />
                <OptionInputCard
                    required={true}
                    none={true}
                    id={"associate-category"}
                    label={"Seleccione la categoria del servicio asociado"}
                    array={servicesCategories}
                    defaultValue={values.ID_Categoria}
                    onChange={(event) => handleInputChange("ID_Categoria", event, setValues)}
                />
            </GridContainer>

            <ImageInputCard
                stateValue={values.Imagen}
                setState={setValues}
                info="Imagen del servicio"
            />

            <ButtonCard
                title="Crear servicio asociado"
                type="submit"
            >
                Crear servicio asociado
            </ButtonCard>

        </FormWrapper>
    );
}

export { AsociadosForm }