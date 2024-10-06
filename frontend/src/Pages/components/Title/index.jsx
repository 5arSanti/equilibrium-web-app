
import "./styles.css";

const Title = ({children, white=false}) => {
    return (
        <div className="title-container">
            <h1 className={`title archivo-font ${white && "white-color"}`}>
                {children}
            </h1>
        </div>

    );
}

export { Title };