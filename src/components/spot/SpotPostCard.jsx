import "../../styles/components/spot/SpotPostCard.css"

import users from "../../data/users.js"

function SpotPostCard({ spot }) {
  const creator = users.find(
    (user) => user.id === spot.createdByUserID
  );

  return (
    <div className="spot-card">
        {spot.image ? <img src={spot.image} alt={spot.name} /> : <div className="image" />}
        <h2>{spot.name}</h2>
        <p>{creator ? creator.username : "Unknown User"}</p>
        {/* <p>{spot.location.address}</p> */}
    </div>
  );
}

export default SpotPostCard;