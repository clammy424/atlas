import { useEffect, useState } from "react";
import "../../styles/components/SignupForm.css";

function DefaultProfilePicture() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 22c0-4.42 3.58-8 8-8s8 3.58 8 8" />
        </svg>
    );
}

function SignupForm({ children }) {
    const [profilePicture, setProfilePicture] = useState(null);
    const [profilePictureUrl, setProfilePictureUrl] = useState("");

    useEffect(() => {
        if (!profilePicture) {
            setProfilePictureUrl("");
            return undefined;
        }

        const imageUrl = URL.createObjectURL(profilePicture);
        setProfilePictureUrl(imageUrl);

        return () => URL.revokeObjectURL(imageUrl);
    }, [profilePicture]);

    function handleProfilePictureChange(event) {
        setProfilePicture(event.target.files?.[0] ?? null);
    }

    return (
        <form className="signup-form">
            {/* <div className="signup-form__picture-field">
                <label className="signup-form__avatar-upload" htmlFor="profile-picture">
                    <span
                        className="signup-form__avatar"
                        aria-label={profilePictureUrl ? "Selected profile picture" : "Default profile picture"}
                    >
                        {profilePictureUrl ? (
                            <img src={profilePictureUrl} alt="" />
                        ) : (
                            <DefaultProfilePicture />
                        )}
                    </span>
                    <span className="signup-form__picture-copy">
                        <span>Profile picture</span>
                        <span>Click avatar to upload</span>
                    </span>
                    <input
                        id="profile-picture"
                        name="profile-picture"
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePictureChange}
                    />
                </label>
            </div> */}

            <label className="signup-form__field" htmlFor="signup-email">
                <span>Email</span>
                <input id="signup-email" name="email" type="email" autoComplete="email" />
            </label>

            <label className="signup-form__field" htmlFor="signup-username">
                <span>Username</span>
                <input id="signup-username" name="username" type="text" autoComplete="username" />
            </label>
            <p className="signup-form__helper" aria-live="polite">
                Username availability will appear here.
            </p>

            <label className="signup-form__field" htmlFor="signup-password">
                <span>Password</span>
                <input id="signup-password" name="password" type="password" autoComplete="new-password" />
            </label>

            <label className="signup-form__field" htmlFor="verify-password">
                <span>Verify password</span>
                <input id="verify-password" name="verify-password" type="password" autoComplete="new-password" />
            </label>
            <p className="signup-form__error" aria-live="polite" />

            <button className="signup-form__submit" type="button">
                Create Account
            </button>

            {children}

            <p className="signup-form__login">
                Already have an account? <a href="/login">Log In</a>
            </p>
        </form>
    );
}

export default SignupForm;
