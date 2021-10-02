import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Login from "./LoginIn";
import Landing from "./Landing";

function App(){
  return(
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/landing" component={Landing}></Route>
      </Switch>
    </Router>
  )
}


export default App;