import "../../styles/components/spot/SpotPostGrid.css"
import SpotPostCard from "./SpotPostCard.jsx"


function SpotPostGrid({ spots }) {
    return (
        <div className="spot-grid">
            {spots.map(spot => (
                <SpotPostCard
                    key={spot.id}
                    spot={spot}
                />
            ))}
        </div>
    );
}

export default SpotPostGrid;

