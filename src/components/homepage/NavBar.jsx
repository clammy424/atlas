import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useModal } from "../../hooks/useModal";
import "../../styles/components/mainLayout/NavBar.css";

import { IoHomeOutline, IoAddCircleOutline, IoEarthOutline, IoPersonCircleOutline } from "react-icons/io5";

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
    const { isLoginOpen, openLogin } = useModal();

    function handleProfileClick() {
        console.log("Profile button clicked");
        console.log("User:", user);
        console.log("isLoginOpen:", isLoginOpen);
        if (user) {
            // later
            // openProfileMenu();
        } else {
            console.log("Opening login modal");
            openLogin();
        }
    }

    return (
        <nav>
            {navItems.map((item) => (
                <Link key={item.label} to={item.href} className="icon">
                    <item.icon/>
                </Link>
            ))}
            <button className="icon" type="button" onClick={handleProfileClick}>
                {user ? user.username : <IoPersonCircleOutline />}
            </button>
        </nav>
    );
}

export default NavBar;
