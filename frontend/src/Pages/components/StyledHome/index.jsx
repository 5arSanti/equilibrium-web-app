import "./styles.css"

const StyledHome = ({image, icon}) => {

    return (
        <section className="styled-home-main-container" id="about">
            <div className="gradient-container">
                <div className="text-container">
                    <div> Bienvenido a <span>Equilibrium</span></div>
                    <p>Bienestar, salud, belleza y descanso.</p>
                </div>


            </div>

            <img src={image} alt=""/>
        </section>
    );
}

export { StyledHome }