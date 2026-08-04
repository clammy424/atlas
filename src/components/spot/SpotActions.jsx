import { FaBookmark, FaHeart, FaShareAlt } from "react-icons/fa";

function SpotActions({ likeCount }) {
    return (
        <div className="spot-actions" aria-label="Spot actions">
            <button className="spot-action-button" type="button">
                <FaHeart aria-hidden="true" />
                <span>{likeCount}</span>
            </button>

            <button className="spot-action-button" type="button" aria-label="Save spot">
                <FaBookmark aria-hidden="true" />
            </button>

            <button className="spot-action-button" type="button" aria-label="Share spot">
                <FaShareAlt aria-hidden="true" />
            </button>
        </div>
    );
}

export default SpotActions;
