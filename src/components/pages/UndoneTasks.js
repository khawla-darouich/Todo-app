import TodoList from "../todo/TodoList";

function UndoneTasks(props) {
    const UndoneTasks = [];

    props.todoList.forEach(element => {
        if (!element.done) {
            UndoneTasks.push(element);
        }
    });

    return (
        <div>
            <h1 className="mt-3 text-center ">Undone Tasks </h1>
            <div className="container">
                <TodoList todos={UndoneTasks} />
            </div>
        </div>
    );
}

export default UndoneTasks;