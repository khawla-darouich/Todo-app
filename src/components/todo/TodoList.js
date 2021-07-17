import classes from './TodoList.module.css'
import TodoItem from './TodoItem';

function TodoList(props) {
    return (
        <ul className="row">
            {props.todos.map(todo => <TodoItem title={todo.title} done={todo.done} />)}

        </ul>);
}

export default TodoList;