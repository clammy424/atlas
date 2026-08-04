import Profile from "../components/Profile.jsx"

import "../styles/pages/MyProfile.css"

function UserHome() {
    return (
        <div className="profile">
            <div className="profile-container">
                <Profile/>
            </div>
        </div>
        
        
    );
}

export default UserHome;