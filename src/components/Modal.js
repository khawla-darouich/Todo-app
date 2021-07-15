function Modal(props) {

    function confirmHandler() { }
    function cancelHandler() {
        props.onClick();
    }
    return (
        <div className='modal'>
            <h5>Are u sure?</h5>
            <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
            <button className='btn'>Confirm</button>
        </div>
    );
}


export default Modal;