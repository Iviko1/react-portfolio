import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <Router basename="/react-portfolio">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={ContactPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
