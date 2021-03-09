import logo from './logo.svg';
import './App.css';
import BrandHeader from './Components/BrandHeader/BrandHeader';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';
import Todo from './Components/Pages/Todo/Todo';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import Cards from './Components/Cards/Cards';
//import CardHolder from './Components/Cards/CardHolder';
//import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
    <section>
      <BrandHeader></BrandHeader> 
      <Switch>
        <Route path="/" exact>
           <Home/>
        </Route>
        <Route path="/todos" exact>
           <Todo />
        </Route>
        <Route path="/Login" exact>
        <Login></Login>
        </Route>
      </Switch>
    </section>
    </Router>
  );
}

export default App;
/*
  <br/>     
      <section>
        <Login>
          
        </Login>
      </section>
      <br/> 
      <CardHolder>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </CardHolder> */