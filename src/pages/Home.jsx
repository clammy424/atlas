import { useEffect, useState } from "react";

import "../styles/pages/Home.css"

import { useAuth } from "../hooks/useAuth.js";
import TagBar from "../components/TagBar.jsx"
import boards from "../data/boards.jsx"
import tripsData from "../data/trips.jsx"
import TripGrid from "../components/TripGrid.jsx"

function Home() {
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const { user } = useAuth();

    useEffect(() => {
        try {
            setTrips(tripsData);
        } catch (err) {
            setError(err.message || "Unable to load posts");
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <>
            <div className="home">
                <div> {user ? user.username : "Not logged in" }</div>
                <TagBar boards={boards}/>
                {loading && <p>Loading posts...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && <TripGrid trips={trips} />}
            </div>
        </>
    );
}

export default Home;