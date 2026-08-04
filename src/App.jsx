import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/HomePage";
import UserHome from "./pages/UserHomePage";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import LoginModal from "./components/auth/LoginModal";
import SpotDetail from "./pages/SpotDetailPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<UserHome />} />
                    <Route path="/spot-detail" element={<SpotDetail />} />
                </Route>
            </Routes>
            <LoginModal />
        </>
    );
}

export default App;
