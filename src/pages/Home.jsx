import { useEffect, useState } from "react";

import "../styles/pages/Home.css"

import TagBar from "../components/TagBar.jsx"
import boards from "../data/boards.jsx"
import TripGrid from "../components/TripGrid.jsx"

function Home() {
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadPosts() {
            try {
                const response = await fetchPosts();
                setTrips((response.posts || []).map((post) => ({
                    id: post.id,
                    title: post.description?.slice(0, 32) || "Untitled post",
                    location: post.location,
                    image: post.media?.[0]?.url || "",
                    tags: []
                })));
            } catch (err) {
                setError(err.message || "Unable to load posts");
            } finally {
                setLoading(false);
            }
        }

        loadPosts();
    }, []);

    return (
        <>
            <div className="home">
                <TagBar boards={boards}/>
                {loading && <p>Loading posts...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && <TripGrid trips={trips} />}
            </div>
        </>
    );
}

export default Home;