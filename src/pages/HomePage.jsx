import { useEffect, useState } from "react";

import "../styles/pages/Home.css"

import { useAuth } from "../hooks/useAuth.js";
import spotsData from "../data/spots.js"
import SpotPostGrid from "../components/spot/SpotPostGrid.jsx"

function Home() {
    const [spots, setSpots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        try {
            setSpots(spotsData);
        } catch (err) {
            setError(err.message || "Unable to load spots");
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <>
            <div className="home">
                {loading && <p>Loading spots...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && <SpotPostGrid spots={spotsData} />}
            </div>
        </>
    );
}

export default Home;