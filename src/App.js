import { Router, Route, Switch, Link } from "react-router-dom";
import customHistory from "./customHistory";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  return (
    <Router history={customHistory}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
