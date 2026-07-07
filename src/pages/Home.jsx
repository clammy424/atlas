import "../styles/Home.css"

import TagBar from "../components/TagBar.jsx"
import trips from "../data/trips.jsx"
import TripGrid from "../components/TripGrid.jsx"

function Home() {
    return (
        <>
            <div className="home">
                <TagBar/>
                <TripGrid trips={trips}/>
            </div>
        </>
        
        
    );
}

export default Home;