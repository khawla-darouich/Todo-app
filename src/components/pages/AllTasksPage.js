import TodoList from "../todo/TodoList";
import BackDrop from '../Backdrop';
import Modal from '../Modal';
import NewTodoForm from "../todo/NewTodoForm";
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

function AllTasksPage(props) {
    /*********post */

    const history = useHistory();
    function addTodoHandler(todoData) {
        console.log(todoData);

        fetch(
            'https://todo-f91b2-default-rtdb.firebaseio.com/todos.json'
            , {
                method: 'POST',
                body: JSON.stringify(todoData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            closeModal();
            if (refresh) {
                setRefresh(false);
            }
            else {
                setRefresh(true);
            }
            history.replace('/');
        });

    }
    const [refresh, setRefresh] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function addHandler() {
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }
    /******************Get */
    const [isLoading, setIsLoading] = useState(true);
    const [LoadedTodos, setLoadedTodos] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://todo-f91b2-default-rtdb.firebaseio.com/todos.json'
        ).then(reponse => {
            return reponse.json();
        }).then(data => {
            const todos = [];
            for (const key in data) {
                const todo = {
                    id: key,
                    ...data[key]
                };
                todos.push(todo);
            }
            setIsLoading(false);
            setLoadedTodos(todos);
        });
    }, [refresh]);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1 className="text-center mt-3">My Todos </h1>
            <h2 className="text-center"><button className='btn' onClick={addHandler}><span>&#43;</span></button></h2>
            <div className="container">
                <TodoList todos={LoadedTodos} />
                {modalIsOpen && <BackDrop onClick={closeModal} />}
                {modalIsOpen && <NewTodoForm onAddTodo={addTodoHandler} />}
            </div>

        </div>
    );
}

export default AllTasksPage;