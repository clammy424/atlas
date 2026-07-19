import "../styles/components/TripGrid.css"
import TripCard from "./TripCard.jsx"


function TripGrid({ trips }) {
    return (
        <div className="trip-grid">
            {trips.map(trip => (
                <TripCard
                    key={trip.id}
                    trip={trip}
                />
            ))}
        </div>
    );
}

export default TripGrid;

