import { WrapperContainer2 } from "../WrapperContainers";

import "./styles.css";

const FormWrapper = ({children, onSubmit}) => {
    return(
        <form className="form-container" onSubmit={onSubmit}>
            <WrapperContainer2 justifyContent="start" alignItems="center" padding={40} gap={20} flexDirection="column">
                {children}
            </WrapperContainer2>
        </form>
    )
}

export { FormWrapper };