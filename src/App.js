import React from "react";
import "./stylesheet/magnific-popup.css";
import "./stylesheet/styles.css";
import "./stylesheet/swiper.css";
import "./stylesheet/bootstrap.css";
import "./stylesheet/fontawesome-all.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LiveCommunication from "./LiveCommunication/LiveCommunication";
import Login from "./Login/LogIn";
import Landing from "./landing/Landing";
import Register from "./Register/Register";
import LiveCommunicationLobby from "./LiveLobby/LiveLobby";
import LockedLogLobby from "./LockedLogLobby/LockedLogLobby";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            path="/live-communication/:id"
            exact={true}
            component={LiveCommunication}
          />
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/register" component={Register} />
          <Route exact={true} path="/landing" component={Landing} />
          <Route
            exact={true}
            path="/liveCommunicationLobby"
            component={LiveCommunicationLobby}
          />
          <Route
            exact={true}
            path="/lockedLogLobby"
            component={LockedLogLobby}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
