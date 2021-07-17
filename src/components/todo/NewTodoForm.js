import classes from './NewTodoForm.module.css';

function NewTodoForm() {

    return (
        <div className='modal'>
            <h5>Add new Todo</h5>
            <form className={classes.form} >
                <div className={classes.control}>
                    <label htmlFor="title">Todo title</label>
                    <input type="text" required id="title" ref={titleInputRef} />
                </div>
            </form>
            <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
            <button className='btn'>Confirm</button>
        </div>
    );

}

export default NewTodoForm;