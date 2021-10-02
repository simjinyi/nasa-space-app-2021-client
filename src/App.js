import "./stylesheet/magnific-popup.css";
import "./stylesheet/styles.css";
import "./stylesheet/swiper.css";
import "./stylesheet/bootstrap.css";
import "./stylesheet/fontawesome-all.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LiveCommunication from "./LiveCommunication/LiveCommunication";
import Login from "./Login/LogIn";
import Landing from "./Landing";
import Register from "./Register/Register";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            path="/live-communication"
            exact={true}
            component={LiveCommunication}
          ></Route>
          <Route exact={true} path="/login" component={Login}></Route>
          <Route exact={true} path="/landing" component={Landing}></Route>
          <Route exact={true} path="/register" component={Register}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
