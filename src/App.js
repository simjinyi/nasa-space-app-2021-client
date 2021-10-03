import React from 'react'
import Landing from "./landing/Landing"
import LiveCommunicationLobby from "./liveCommunicationLobby/LiveCommunicationLobby"
import HistoryLogLobby from "./historyLogLobby/HistoryLogLobby"
import "./stylesheet/magnific-popup.css";
import "./stylesheet/styles.css";
import "./stylesheet/swiper.css";
import "./stylesheet/bootstrap.css";
import "./stylesheet/fontawesome-all.css";

const BrowserRouter = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/landing" exact component={Landing}/>
        <Route path="/liveCommunicationLobby" exact component={LiveCommunicationLobby}/>
        <Route path="/historyLogLobby" exact component={HistoryLogLobby}/>
      </BrowserRouter>
    </div>
  )
}

export default App;
