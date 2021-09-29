import '../styles/_modal.scss';


function Modal({modal_children , modal_visible}) {
    return (
        modal_visible ? 
        <div className="modal-wrapper">
            <div className="modal">
                {modal_children}
            </div>
        </div> : null
    )
}

export default Modal
