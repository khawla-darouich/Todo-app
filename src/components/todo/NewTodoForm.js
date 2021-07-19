import classes from './NewTodoForm.module.css';
import { useRef } from 'react';



function NewTodoForm(props) {




    const titleInputRef = useRef();
    const descriptionInputRef = useRef();
    function submitHandler(event) {
        console.log("TodoData");
        event.preventDefault();
        const entredTitle = titleInputRef.current.value;
        const entredDescription = descriptionInputRef.current.value;
        const TodoData = {
            title: entredTitle,
            description: entredDescription
            , done: false
        }
        console.log(TodoData);
        props.onAddTodo(TodoData);
    }


    return (
        <div className='form'>
            <h3 className="title">Add new Todo</h3>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">title</label>
                    <input type="text" required id="title" ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">description</label>
                    <textarea type="text" required id="description" rows='3' ref={descriptionInputRef} />
                </div>
                <button className='m-1 btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                        <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z" />
                    </svg>
                </button>
            </form>



        </div>
    );

}

export default NewTodoForm;
