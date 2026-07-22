import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import MyTrips from "./pages/MyTrips";
import UserHome from "./pages/UserHome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/trip/:id" element={<MyTrips />} />
                <Route path="/profile" element={<UserHome />} />
            </Route>
        </Routes>
    );
}

export default App;
