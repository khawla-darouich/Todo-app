import Todo from "./components/Todo";
import { Route, Switch } from 'react-router-dom';
import TodoList from "./components/todo/TodoList";
import Layout from "./components/layout/Layout";
import AllTasksPage from "./components/pages/AllTasksPage";
import DoneTasks from "./components/pages/DoneTasks";
import UndoneTasks from "./components/pages/UndoneTasks";

const todoList = [
  {
    title: "Learn Reat ",
    description: "description",
    done: true
  },
  {
    title: "Learn Reat ",
    description: "description",
    done: false
  },
  {
    title: "Learn Reat ",
    description: "description",
    done: true
  },
  {
    title: "Learn Reat ",
    description: "description",
    done: true
  },
  {
    title: "Learn Reat ",
    description: "description",
    done: false
  },
  {
    title: "Learn Reat ",
    description: "description",
    done: true
  },
  {
    title: "Learn Reat ",
    description: "description",
    done: true
  },
  {
    title: "Learn Reat ",
    description: "description",
    done: true
  }
];

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllTasksPage todoList={todoList} />
        </Route>
        <Route path='/done-tasks'>
          <DoneTasks todoList={todoList} />
        </Route>
        <Route path='/favorites'>
          <UndoneTasks todoList={todoList} />
        </Route>
      </Switch>

    </Layout>

  );
}

export default App;
