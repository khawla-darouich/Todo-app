import { useHistory } from 'react-router-dom';
import NewTodoForm from './NewTodoForm';

function NewTodo() {
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
            history.replace('/');
        });
    }
    return (
        <NewTodoForm onAddTodo={addTodoHandler} />
    )
}
export default NewTodo;