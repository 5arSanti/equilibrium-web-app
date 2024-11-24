import { ButtonCard } from "../../ButtonCard";
import { WrapperContainer2 } from "../../WrapperContainers";

const AdminOptionButtons = ({ options, setSelectedOption }) => {

    return(
        <WrapperContainer2 flexDirection="row" gap={20} padding={0}>
            {options && Object.keys(options).map((item, index) => (
                <ButtonCard 
                    key={index}
                    title={item}
                    onClick={() => setSelectedOption(item)}
                >
                    {item}
                </ButtonCard>
            ))}
        </WrapperContainer2>    
    )
}

export { AdminOptionButtons };