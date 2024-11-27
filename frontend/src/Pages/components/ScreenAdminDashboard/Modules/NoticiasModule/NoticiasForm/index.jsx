import React from "react";
import { WrapperContainer2 } from "../../../../WrapperContainers";
import { InputCard, OptionInputCard, TextAreaCard } from "../../../../InputsCards";
import { ButtonCard } from "../../../../ButtonCard";
import { handleInputChange } from "../../../../../../utils/handleInputChange";
import { handlePostData } from "../../../../../../utils/handleData/handlePostData";
import { GridContainer } from "../../../../GridContainer";
import { ImageInputCard } from "../../../../ImageInputCard";
import { AppContext } from "../../../../../../Context";


const NoticiasForm = ({ serviciosModule={} }) => {
    const { user } = React.useContext(AppContext);

    const { servicesCategories, newsTypes } = serviciosModule;

    const [values, setValues] = React.useState({
        Titulo: null,
        SubTitulo: null,
        Cuerpo_Noticia: null,
        Imagen: null,
        Fuente: null,
        ID_Tipo_Noticia: null, 
        ID_Usuario: null,
        ID_Categoria_Servicios: null, 
    })

    React.useEffect(() => {
        if (user?.Cedula_Usuario !== values.ID_Usuario) {
            setValues(prevValues => ({
                ...prevValues,
                ID_Usuario: user.Cedula_Usuario,
            }));
        }
    }, [user, values.ID_Usuario]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        await handlePostData(event, values, "/news");
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <WrapperContainer2 justifyContent="start" alignItems="center" padding={40} gap={20} flexDirection="column">
                <InputCard
                    required={true}
                    id={"title"}
                    label={"Titulo"}
                    placeholder="Ingrese el titulo de la noticia"
                    value={values.Titulo}
                    onChange={(event) => handleInputChange("Titulo", event, setValues)}
                />
                <InputCard
                    required={true}
                    id={"subtitle"}
                    label={"Subtitulo"}
                    placeholder="Ingrese el subtitulo de la noticia"
                    value={values.SubTitulo}
                    onChange={(event) => handleInputChange("SubTitulo", event, setValues)}
                />
                <GridContainer padding={0}>
                    <OptionInputCard
                        none={true}
                        id={"news-type"}
                        label={"Seleccione el tipo de la noticia"}
                        array={newsTypes}
                        defaultValue={values.ID_Tipo_Noticia}
                        onChange={(event) => handleInputChange("ID_Tipo_Noticia", event, setValues)}
                    />
                    <OptionInputCard
                        none={true}
                        id={"service-category"}
                        label={"Seleccione la categoria"}
                        array={servicesCategories}
                        defaultValue={values.ID_Categoria_Servicios}
                        onChange={(event) => handleInputChange("ID_Categoria_Servicios", event, setValues)}
                    />
                </GridContainer>

                <TextAreaCard
                    required={true}
                    id={"body"}
                    label={"Cuerpo de la noticia"}
                    placeholder="Ingrese el cuerpo de la noticia"
                    value={values.Cuerpo_Noticia}
                    onChange={(event) => handleInputChange("Cuerpo_Noticia", event, setValues)}
                />

                <InputCard
                    required={false}
                    id={"source"}
                    label={"Fuente de la noticia"}
                    placeholder="Ingrese la fuente de la noticia"
                    value={values.Fuente}
                    onChange={(event) => handleInputChange("Fuente", event, setValues)}
                />

                <ImageInputCard
                    stateValue={values.Imagen}
                    setState={setValues}
                    info="Imagen de la noticia"
                />

                <ButtonCard 
                    title="Enviar información del curso"
                    type="submit"
                >
                    Crear noticia
                </ButtonCard>
            </WrapperContainer2>
        </form>
    );
}

export { NoticiasForm };