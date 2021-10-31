import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact> 
            <h1>Home</h1>
          </Route>

        </Switch> 
      </>
    </Router>
  );
}

export default App;
