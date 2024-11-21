
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { WrapperContainer2 } from "../WrapperContainers";

import "./styles.css"

const IconsList = ({white=false, flexDirection="row", padding=20, justifyContent="center", size=30}) => {
    const icons = [
        {
            name: "Facebook",
            link: "https://www.facebook.com/share/LEa8SMvd6oBsiMVi/",
            icon: <FaFacebookF className={white ? "white-color" : "lines-color" }/>,
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/equilibriumsantarosa/profilecard/?igsh=aXkxMDBheWo4Y3A3",
            icon: <FaInstagram className={white ? "white-color" : "lines-color" }/>,
        },
    ]

    return(
        <WrapperContainer2 flexDirection={flexDirection} justifyContent={justifyContent} gap={20} className={`icons`} padding={padding}>
            {icons?.map((item, index) => (
                <a 
                    style={{width: size, height: size}} 
                    key={index} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href={item?.link} 
                    title={item?.name}
                >
                    {item?.icon}
                </a>
            ))}
        </WrapperContainer2>
    );
}
export { IconsList };