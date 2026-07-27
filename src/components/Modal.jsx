import "../styles/components/Modal.css";

function Modal({ children, onClose }) {
    function handleOverlayClick(event) {
        if (event.target === event.currentTarget) {
            onClose?.();
        }
    }

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content" role="dialog" aria-modal="true">
                {onClose ? (
                    <button className="modal-close" type="button" onClick={onClose} aria-label="Close modal">
                        &times;
                    </button>
                ) : null}
                {children}
            </div>
        </div>
    );
}

export default Modal;
