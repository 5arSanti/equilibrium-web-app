import { handleImageChange } from "../../../utils/HandleInput/handleFileChange";
import { UploadFileCard } from "../InputsCards";
import { WrapperContainer2 } from "../WrapperContainers";

import "./styles.css"

const ImageInputCard = ({stateValue, setState}) => {
    return(
        <WrapperContainer2 padding={0} flexDirection="column" className="profile-input">
            {stateValue &&
                <img src={stateValue} alt="selected-image" />
            }
            <UploadFileCard
                accept=".png, .jpg, .jpeg"
                info="Archivos PNG (.png), JPG (.jpg) o JPEG (.jpeg)"
                id={"user-image"}
                label={"Imagen de Perfil:"}
                onChange={(event) => handleImageChange(event, setState)}
                
            />
        </WrapperContainer2>
    )
}

export { ImageInputCard };