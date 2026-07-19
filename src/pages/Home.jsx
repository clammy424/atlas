import "../styles/pages/Home.css"

import TagBar from "../components/TagBar.jsx"
import boards from "../data/boards.jsx"
import trips from "../data/trips.jsx"
import TripGrid from "../components/TripGrid.jsx"

function Home() {
    return (
        <>
            <div className="home">
                <TagBar boards={boards}/>
                <TripGrid trips={trips}/>
            </div>
        </>
        
        
    );
}

export default Home;