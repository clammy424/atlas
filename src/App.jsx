import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import MyTrips from "./pages/MyTrips";
import UserHome from "./pages/UserHome";

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/trip/:id" element={<MyTrips />} />
                <Route path="/profile" element={<UserHome />} />
            </Route>
        </Routes>
    );
}

export default App;