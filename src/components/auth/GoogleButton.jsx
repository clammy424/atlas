import "../../styles/components/GoogleButton.css";

function GoogleButton() {
    return (
        <button className="google-button" type="button">
            <span className="google-button__mark" aria-hidden="true">G</span>
            Continue with Google
        </button>
    );
}

export default GoogleButton;
