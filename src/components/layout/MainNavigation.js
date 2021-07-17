import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css'
import { useContext } from 'react';


function MainNavigation() {


    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <a class="navbar-brand" href="#">
                    <img src="https://play-lh.googleusercontent.com/5CNo4tlDYDJ2N8qyRoLlTKEx7CvuCSdr-iiSaQob5EGRGrvy9QFnX0HufdPGRHWuq7-v" alt="" width="50" height="50" />
                </a>
            </div>
            <nav >
                <ul>
                    <li>
                        <Link to="/">All Todos</Link>
                    </li>
                    <li>
                        <Link to="/done-tasks">Done Tasks</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Undone Tasks

                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default MainNavigation;