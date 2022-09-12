

export default function Cards(props)
{
    return(
        <div className="card">
            <img src= {props.cardData.imageUrl} alt="CardImg" className="CardImg" />
            <div className="CardContent">
                <div className="MapContent">
                <img src="/Images/Gmaps.png" alt="GoogleMaps" className="Location" />
                <p className="Text">{props.cardData.location}</p>
                <a href={props.cardData.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="MapText">View on Google Maps</a>
                </div>
            <h1 className="CardHeadingOne">{props.cardData.title}</h1>
            <h3 className="CardHeadingTwo">{props.cardData.startDate} - {props.cardData.endDate}</h3>
            <p className="CardParaText">{props.cardData.description}</p>
            </div>
        </div>
    )
}