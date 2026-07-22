import "../../styles/components/LoginForm.css";

function LoginForm({ children }) {
    return (
        <form className="login-form">
            {/* <label className="login-form__field" htmlFor="email">
                <span>Email</span>
                <input id="email" name="email" type="email" autoComplete="email" />
            </label> */}

            <label className="login-form__field" htmlFor="username">
                <span>Username</span>
                <input id="username" name="username" type="text" autoComplete="username" />
            </label>

            <label className="login-form__field" htmlFor="password">
                <span>Password</span>
                <input id="password" name="password" type="password" autoComplete="current-password" />
            </label>

            <a className="login-form__forgot-link" href="/forgot-password">
                Forgot your password?
            </a>

            <button className="login-form__submit" type="button">
                Log In
            </button>

            {children}

            <p className="login-form__signup">
                Don&apos;t have an account? <a href="/signup">Sign Up</a>
            </p>
        </form>
    );
}

export default LoginForm;
