import users from "../data/users.js";


export async function login(username, inputPassword) {
    // TODO:
    // 1. Find the user
    const user = users.find(u => u.username === username);
    if (!user) {
        throw new Error("User not found");
    }

    // 2. Compare password
    // if password incorrect return error
    if (user.password !== inputPassword) {
        throw new Error("Incorrect password");
    }

    const { password: _, ...safeUser } = user;
    return safeUser;
}

export function logout() {

}

export function signup(username, email, password) {
}

export function getCurrentUser() {

}

const AuthService = {
    login,
    logout,
    signup,
    getCurrentUser
};

export default AuthService;