import { TbMassage } from "react-icons/tb";
import { GiHealthNormal } from "react-icons/gi";
import { MdElderlyWoman } from "react-icons/md";

const egesServices = [
    {
        serviceName: "CENTRO DE ESTETICA Y SPA",
        mainSection: "EQUILIBRIUM",
        icon: <TbMassage/>,
        uri: "",
        description: "Ofrecemos tratamientos faciales, masajes relajantes, cuidado corporal, manicura, pedicura y depilación, todo en un ambiente tranquilo y elegante. ¡Ven y disfruta de una experiencia rejuvenecedora!"
    },
    {
        serviceName: "SERVICIOS DE SALUD INTEGRAL",
        mainSection: "EGES",
        icon: <GiHealthNormal/>,
        uri: "",
        description: "Ofrecemos servicios de salud integral que incluyen consultas médicas, terapias físicas, nutrición, psicología y programas de bienestar, todo en un entorno profesional y acogedor. ¡Tu salud y bienestar son nuestra prioridad!"
    },
    {
        serviceName: "CENTRO GERIATRICO",
        mainSection: "EGES",
        icon: <MdElderlyWoman/>,
        uri: "",
        description: "Ofrecemos atención integral para adultos mayores, incluyendo cuidados médicos, terapias físicas, actividades recreativas y apoyo emocional, en un entorno seguro y acogedor. ¡Tu bienestar es nuestra prioridad!"
    },
]

export { egesServices }; 