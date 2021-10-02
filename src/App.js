import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Login from "./LoginIn";
import Landing from "./Landing";
import Register from "./Register";

function App(){
  return(
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/landing" component={Landing}></Route>
        <Route exact path="/register" component={Register}></Route>
      </Switch>
    </Router>
  )
}


export default App;