import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import CommentsSection from "../components/spot/CommentsSection.jsx";
import SpotActions from "../components/spot/SpotActions.jsx";
import SpotCarousel from "../components/spot/SpotCarousel.jsx";
import SpotDetailDisplay from "../components/spot/SpotDetailDisplay.jsx";
import "../styles/pages/SpotDetailPage.css";

const placeholderSpot = {
    title: "Golden Hour Lookout",
    username: "mira_travels",
    userProfileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
    postDate: "June 18, 2026",
    visitedDate: "May 30, 2026",
    description:
        "A quiet overlook tucked above the city with wide sunset views, warm stone paths, and enough room to sit for a while without feeling crowded.",
    likeCount: 128,
    media: [
        {
            src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
            alt: "Sunset view from a scenic overlook",
        },
        {
            src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
            alt: "Mountain path leading toward a lookout",
        },
        {
            src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
            alt: "Open landscape at golden hour",
        },
    ],
    comments: [
        {
            id: 1,
            username: "alex",
            text: "This view looks unreal. Adding it to my weekend list.",
        },
        {
            id: 2,
            username: "jules",
            text: "Went near sunset last month and it was peaceful even with a few people around.",
        },
        {
            id: 3,
            username: "sam",
            text: "The walking path is easy, but bring water if it is warm out.",
        },
        {
            id: 4,
            username: "nia",
            text: "Great spot for photos without needing to hike for hours.",
        },
    ],
};

function SpotDetailPage() {
    const navigate = useNavigate();

    return (
        <section className="spot-detail-page" aria-labelledby="spot-detail-title">
            <div className="spot-detail-container">
                {/* <button
                    className="spot-detail-back-button"
                    type="button"
                    onClick={() => navigate(-1)}
                >
                    <FaArrowLeft aria-hidden="true" />
                    Back
                </button> */}

                <div className="spot-detail-layout">
                    <div className="spot-detail-media-panel">
                        <SpotCarousel media={placeholderSpot.media} />
                        <SpotActions likeCount={placeholderSpot.likeCount} />
                    </div>

                    <div className="spot-detail-info-panel">
                        <SpotDetailDisplay spot={placeholderSpot} />
                        <CommentsSection comments={placeholderSpot.comments} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SpotDetailPage;
