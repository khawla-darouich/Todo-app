function Modal(props) {

    function confirmHandler() { }
    function cancelHandler() {
        props.onClick();
    }
    return (
        <div className='modal2'>
            <h3 className="mb-3">Delete TODO </h3>
            <h5 className="mb-3 text-info">Are u sure?</h5>
            <button className='btn m-1 btn--alt' onClick={cancelHandler}>Cancel</button>
            <button className='m-1 btn'>Confirm</button>
        </div>
    );
}


export default Modal;
