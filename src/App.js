
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


// pages
import About from './components/About';
import Contact from './components/Contact'
import error404 from './components/error404'
import Home from './components/Home'
import Header from './Navbar';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route component={error404}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
