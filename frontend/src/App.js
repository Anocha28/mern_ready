import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import HomeScreen from './Screens/HomeScreen'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomeScreen} />    
      </Switch>
    </Router>
  );
}

export default App;
