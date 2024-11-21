const MapCard = ({width=600, height=500}) => {
    return(
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.453434772972!2d-75.62280712582997!3d4.863428595112264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38822a9a3132bd%3A0x7b10d1aba80a745!2sCra.%2014%20%2310-32%2C%20Santa%20Rosa%20de%20Cabal%2C%20Risaralda!5e0!3m2!1ses!2sco!4v1728253686144!5m2!1ses!2sco" 
            width={width}
            height={height}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            style={{justifySelf: "center"}}  
        >
        </iframe>
    )
}

export { MapCard };