import TodoList from "../todo/TodoList";

function AllTasksPage(props) {

    return (
        <div>
            <h1 className="text-center mt-3">My Todos </h1>
            <h2 className="text-center"><button className='btn'><span>&#43;</span></button></h2>
            <div className="container">
                <TodoList todos={props.todoList} />
            </div>
        </div>
    );
}

export default AllTasksPage;