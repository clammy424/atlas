import SignupForm from "../components/auth/SignupForm";
import GoogleButton from "../components/auth/GoogleButton";
import "../styles/pages/Signup.css";

function Signup() {
    return (
        <main className="signup-page">
            <section className="signup-page__panel" aria-labelledby="signup-title">
                <div className="signup-page__logo" aria-label="Atlas logo placeholder">
                    Atlas
                </div>

                <header className="signup-page__header">
                    <h1 id="signup-title">Create your Atlas account</h1>
                </header>

                <SignupForm>
                    <div className="signup-page__divider" aria-hidden="true">
                        <span>OR</span>
                    </div>
                    <GoogleButton />
                </SignupForm>
                
            </section>
        </main>
    );
}

export default Signup;
