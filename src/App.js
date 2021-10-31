import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Navbar from './components/navbar/Navbar';
import ItemList from './components/itemlist/ItemList';
import Top from './components/top/Top';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact> 
            <Top />
            <ItemList />
          </Route>

        </Switch> 
      </>
    </Router>
  );
}

export default App;
