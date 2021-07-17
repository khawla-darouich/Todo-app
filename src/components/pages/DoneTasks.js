import TodoList from "../todo/TodoList";

function DoneTasks(props) {

    const DoneTasks = [];

    props.todoList.forEach(element => {
        if (element.done) {
            DoneTasks.push(element);
        }
    });

    return (
        <div>
            <h1 className="text-center mt-3">Done Tasks </h1>

            <div className="container">
                <TodoList todos={DoneTasks} />
            </div>
        </div>
    );
}

export default DoneTasks;