import Modal from "../Modal";
// import LoginForm from "./LoginForm";
import Login from "../../pages/Login";
import { useModal } from "../../hooks/useModal";

function LoginModal() {
    const { isLoginOpen, closeLogin } = useModal();

    if (!isLoginOpen) {
        return null;
    }

    return (
        <Modal onClose={closeLogin}>
            <Login />
        </Modal>
    );
}

export default LoginModal;
