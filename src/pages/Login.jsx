import LoginForm from "../components/auth/LoginForm";
import GoogleButton from "../components/auth/GoogleButton";
import "../styles/pages/Login.css";

function Login() {
    return (
        <main className="login-page">
            <section className="login-page__panel" aria-labelledby="login-title">
                <div className="login-page__logo" aria-label="Atlas logo placeholder">
                    Atlas
                </div>

                <header className="login-page__header">
                    <h1 id="login-title">Welcome Back to Atlas</h1>
                </header>

                <LoginForm>
                    <div className="login-page__divider" aria-hidden="true">
                        <span>OR</span>
                    </div>

                    <GoogleButton />
                </LoginForm>
            </section>
        </main>
    );
}

export default Login;
