import "../../../styles/components/posts/ButtonBar.css";
import { IoHeartOutline, IoChatbubbleOutline, IoBookmarkOutline ,IoSendOutline } from "react-icons/io5";

function SpotPostButtonBar() {
    return (
        <div className="button-bar">
            <button className="button-box"><IoHeartOutline className="button"/></button>
            <button className="button-box"><IoChatbubbleOutline className="button"/></button>
            <button className="button-box"><IoBookmarkOutline className="button"/></button>
            <button className="button-box"><IoSendOutline className="button"/></button>
        </div>
    );
}

export default SpotPostButtonBar;