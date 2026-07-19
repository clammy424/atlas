import "../styles/components/TripCard.css"

function TripCard({ trip }) {
  return (
    <div className="trip-card">
        <div className="image"/>
        {/* <img src={trip.image} /> */}
        <h2>{trip.title}</h2>
        <p>{trip.location}</p>
    </div>
  );
}

export default TripCard;
