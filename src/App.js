import "./stylesheet/magnific-popup.css";
import "./stylesheet/styles.css";
import "./stylesheet/swiper.css";
import "./stylesheet/bootstrap.css";
import "./stylesheet/fontawesome-all.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LiveCommunication from "./LiveCommunication/LiveCommunication";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact={true}>
            <div>Users</div>
          </Route>
          <Route path="/live-communication" exact={true}>
            <LiveCommunication />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
