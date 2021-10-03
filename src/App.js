import "./stylesheet/magnific-popup.css";
import "./stylesheet/styles.css";
import "./stylesheet/swiper.css";
import "./stylesheet/bootstrap.css";
import "./stylesheet/fontawesome-all.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LiveCommunication from "./LiveCommunication/LiveCommunication";
import Login from "./Login/LogIn";
import Landing from "./Landing";
import Register from "./Register/Register";
import Profile from "./Profile/Profile";
import MissionCard from "./Profile/MissionCard";
import SideBar from "./Profile/SideBar";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            path="/live-communication/:id"
            exact={true}
            component={LiveCommunication}
          ></Route>
          <Route exact={true} path="/login" component={Login}></Route>
          <Route exact={true} path="/landing" component={Landing}></Route>
          <Route exact={true} path="/register" component={Register}></Route>
          <Route exact={true} path="/profile" component={Profile}></Route>
          <Route exact={true} path="/mission" component={MissionCard}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
