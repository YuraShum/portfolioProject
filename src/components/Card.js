import {FaMapMarkerAlt} from 'react-icons/fa'
export default function Card(props){
    return(
        <div className="card">
            <div className="card--img">
                <img src={props.imageUrl} />
            </div>
            <div className="card--info">
                <div className="card__info--card">
                    <FaMapMarkerAlt style={{width: 25, height: 25}}></FaMapMarkerAlt>
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="card__info--text">
                    <h2>{props.title}</h2>
                    <p className="card__info--date">{props.startDate} - {props.endDate}</p>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}