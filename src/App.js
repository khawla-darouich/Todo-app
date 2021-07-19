import { Route, Switch } from 'react-router-dom';
import Layout from "./components/layout/Layout";
import AllTasksPage from "./components/pages/AllTasksPage";
import DoneTasks from "./components/pages/DoneTasks";
import UndoneTasks from "./components/pages/UndoneTasks";
import Modal from "./components/Modal";



function App() {

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllTasksPage />
        </Route>
        <Route path='/done-tasks'>
          <DoneTasks />
        </Route>
        <Route path='/undone-tasks'>
          <UndoneTasks />
          <Modal />
        </Route>
      </Switch>

    </Layout>

  );
}

export default App;
