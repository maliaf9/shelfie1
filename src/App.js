import React from 'react';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Header from './Component/Header/Header';
import Form from './Component/Form/Form';


function App() {
  return (
    <div className="App">
      <Dashboard />
      <Form />
      <Header />
      
    </div>
  );
}

export default App;
