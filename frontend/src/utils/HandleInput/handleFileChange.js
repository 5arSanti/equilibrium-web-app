import { handleInputChange } from "../handleInputChange";
import { handleNotifications } from "../handleNotifications";

const handleImageChange = (event, setState) => {
    const file = event.target.files[0];
    if (!file) {
        return handleNotifications("error", "No se ha seleccionado un archivo");
    }

    if (file.size > 50 * 1024) {
        return handleNotifications("error", "El archivo seleccionado es demasiado grande. El tamaño máximo permitido son 50 KB.");
    }

    const reader = new FileReader();
    reader.onload = () => {
        handleInputChange("Imagen", reader.result, setState);
    };
    reader.readAsDataURL(file);
};

export { handleImageChange };