import "./stylesheet/magnific-popup.css";
import "./stylesheet/styles.css";
import "./stylesheet/swiper.css";
import "./stylesheet/bootstrap.css";
import "./stylesheet/fontawesome-all.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PastLogs from "./LiveCommunication/LiveCommunication";

// const numbers = [1, 2, 3, 4, 5];
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact={true}>
            <div>Users</div>
          </Route>
          <Route path="/live-communication" exact={true}>
            <PastLogs numbers = {[1, 2, 3, 4, 5]}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
