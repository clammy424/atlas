import "../../styles/components/spot/SpotDetailDisplay.css"

function SpotDetailDisplay({ spot }) {
    return (
        <article className="spot-detail-display" aria-labelledby="spot-detail-title">
            <div className="spot-detail-author">
                <img src={spot.userProfileImage} alt={`${spot.username} profile`} />
                <div>
                    <p className="spot-detail-username">{spot.username}</p>
                </div>  
            </div>
            <h1 id="spot-detail-title">{spot.title}</h1>
            
                    <p className="spot-detail-date">Posted: {spot.postDate}
                        {spot.visitedDate ? (
                            <span> | Visited: {spot.visitedDate}</span>
                        ) : null} </p>

            
            <div>
                    
            </div>
            <p className="spot-detail-description">{spot.description}</p>
        </article>
    );
}

export default SpotDetailDisplay;
