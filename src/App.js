import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Students from "./pages/Students";
import Goals from "./pages/Goals";
import Messages from "./pages/Messages";
import Rewards from "./pages/Rewards";
import Tracking from "./pages/Tracking";
import Profile from "./pages/Profile";
import Progress from "./pages/Progress";
import NewStudent from "./pages/NewStudent";
import NewReward from "./pages/NewReward";
import NewGoal from "./pages/NewGoal";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/students" Component={Students} />
        <Route path="/students/new" Component={NewStudent} />
        <Route path="/goals" Component={Goals} />
        <Route path="/goals/new" Component={NewGoal} />
        <Route path="/messages" Component={Messages} />
        <Route path="/rewards" Component={Rewards} />
        <Route path="/rewards/new" Component={NewReward} />
        <Route path="/tracking" Component={Tracking} />
        <Route path="/students/:id" Component={Profile} />
        <Route path="/students/:id/progress" Component={Progress} />
      </Routes>
    </Layout>
  );
}

export default App;
