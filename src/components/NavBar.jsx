import { useAuth } from "../hooks/useAuth";
import "../styles/components/NavBar.css";

import { IoHomeOutline, IoAddCircleOutline, IoEarthOutline } from "react-icons/io5";

const navItems = [
    {
        label: "Home",
        href: "/",
        icon: IoHomeOutline
    },
    {
        label: "My Trips",
        href: "/",
        icon: IoEarthOutline
    },
    {
        label: "Create Post",
        href: "/createPost",
        icon: IoAddCircleOutline
    }
];

function NavBar(){
    const { user } = useAuth();

    return (
        <nav>
            {navItems.map((item) => (
                <a key={item.label} href={item.href}>
                    <item.icon className="icon"/>
                </a>
            ))}
            <span>{user ? user.username : "Guest"}</span>
        </nav>
    );
}

export default NavBar;