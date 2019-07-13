import React from 'react';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Header from './Component/Header/Header';
import Form from './Component/Form/Form';
import {Switch, Route, Link} from 'react-router-dom';


function App(){
 
  return (
    <div className="App">
      
       <Dashboard />
      
      
      {/* <Form /> */}
      <Header />
      <Link to='/form'/>
      <Switch>
        <Route exact strict path='/form' component={Form}/>

       
      </Switch>
    </div>
  );
}


export default App;
