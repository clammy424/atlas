import "../../../styles/components/posts/SpotPost/SpotPostDetailDisplay.css";
import PostTags from "../PostTags.jsx"

function SpotPostDetailDisplay({ spot }) {

    return (
        <div className="spot-post-detail-display">
            <div className="spot-post-detail-author">
                <img src={spot.userProfileImage} alt={`${spot.username} profile`} />
                <div>
                    <p className="spot-post-detail-username">{spot.username}</p>
                </div>  
            </div>
            <div className="spot-post-detail-content">
                <h1 id="spot-post-detail-title">{spot.title}</h1>
                <p className="spot-post-detail-location">{spot.location}</p>
                <p className="spot-post-detail-date">Posted: {spot.postDate}
                    {spot.visitedDate ? (
                        <span> | Visited: {spot.visitedDate}</span>
                    ) : null} 
                </p>
                <PostTags tags={spot.tags}/>
                <p className="spot-post-detail-description">{spot.description}</p>
                
            </div>
            
        </div>
    );
}

export default SpotPostDetailDisplay;