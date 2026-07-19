import { useState } from "react";

import TripGrid from "./TripGrid.jsx";
import FolderGrid from "./FolderGrid.jsx";
import "../styles/components/Profile.css";

const posts = [
    {
        id: 1,
        title: "Tokyo Day Trip",
        location: "Tokyo, Japan",
        image: "...",
        tags: ["Food", "Shopping"],
    },
    {
        id: 2,
        title: "Coastal Picnic",
        location: "Santorini, Greece",
        image: "...",
        tags: ["Nature", "Relax"],
    },
    {
        id: 3,
        title: "Rainy Market Walk",
        location: "Seoul, South Korea",
        image: "...",
        tags: ["Culture", "Food"],
    },
    {
        id: 4,
        title: "Hidden Cafe Crawl",
        location: "Lisbon, Portugal",
        image: "...",
        tags: ["Coffee", "Art"],
    },
    {
        id: 5,
        title: "Golden Hour Rooftop",
        location: "Copenhagen, Denmark",
        image: "...",
        tags: ["Views", "Evening"],
    },
];

const folders = [
    {
        id: 1,
        name: "Weekend escapes",
        count: 8,
        preview: ["#f6b6b8", "#f6f6cf", "#981349", "#e5e4e7"],
        tags: ["Nature", "Road trip"],
    },
    {
        id: 2,
        name: "Design inspiration",
        count: 5,
        preview: ["#981349", "#f6b6b8", "#f6f6cf", "#e5e4e7"],
        tags: ["Art", "Coffee"],
    },
    {
        id: 3,
        name: "Foodie finds",
        count: 6,
        preview: ["#f6f6cf", "#981349", "#f6b6b8", "#e5e4e7"],
        tags: ["Food", "Nightlife"],
    },
];

function Profile() {
    const [activeTab, setActiveTab] = useState("posts");

    return (
        <div className="profile-dashboard">
            <div className="dashboard-header">
                <div>
                    <p className="eyebrow">Collections</p>
                    <h1>Your saved ideas</h1>
                    <p className="header-copy">
                        Browse the posts and folders you have saved for later.
                    </p>
                </div>

                <div className="profile-actions">
                    <div className="tab-switcher" role="tablist" aria-label="Saved ideas views">
                        <button
                            type="button"
                            className={`tab-button ${activeTab === "posts" ? "active" : ""}`}
                            onClick={() => setActiveTab("posts")}
                        >
                            Posts
                        </button>
                        <button
                            type="button"
                            className={`tab-button ${activeTab === "folders" ? "active" : ""}`}
                            onClick={() => setActiveTab("folders")}
                        >
                            Folders
                        </button>
                    </div>

                    <button type="button" className="create-button">
                        Create
                    </button>
                </div>
            </div>

            <div className="dashboard-content">
                {activeTab === "posts" ? (
                    <section className="view-section">
                        <h2 className="view-title">Saved posts</h2>
                        <TripGrid trips={posts} />
                    </section>
                ) : (
                    <section className="view-section">
                        <h2 className="view-title">Saved folders</h2>
                        <FolderGrid folders={folders} />
                    </section>
                )}
            </div>
        </div>
    );
}

export default Profile;