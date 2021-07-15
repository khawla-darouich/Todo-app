import { useState } from 'react';
import Modal from './Modal';
import BackDrop from './Backdrop';


function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function deleteHandler() {
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen && <Modal onClick={closeModal} />}
            {modalIsOpen && <BackDrop onClick={closeModal} />}

        </div>
    );
}

export default Todo;
