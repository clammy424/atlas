import "../styles/components/TripCard.css"

function TripCard({ trip }) {
  return (
    <div className="trip-card">
        {trip.image ? <img src={trip.image} alt={trip.title} /> : <div className="image" />}
        <h2>{trip.title}</h2>
        <p>{trip.location}</p>
    </div>
  );
}

export default TripCard;
