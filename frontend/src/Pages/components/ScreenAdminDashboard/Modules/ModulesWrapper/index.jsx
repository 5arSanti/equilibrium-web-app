import { ButtonCard } from "../../../ButtonCard"
import { GridContainer } from "../../../GridContainer"
import { WrapperContainer2 } from "../../../WrapperContainers"

const ModulesWrapper = ({ options, setSelectedOption, selectedOption}) => {
    return(
        <GridContainer className="grid-1">
            <WrapperContainer2 flexDirection="row" gap={20} padding={0}>
                {Object.keys(options).map((item, index) => (
                    <ButtonCard
                        key={index}
                        onClick={() => setSelectedOption(item)}
                        title={item}
                    >
                        {item}
                    </ButtonCard>
                ))}
            </WrapperContainer2>

            <WrapperContainer2 padding={0}>
                {selectedOption && 
                    options[selectedOption]
                }
            </WrapperContainer2>
        </GridContainer>
    )
}

export { ModulesWrapper }