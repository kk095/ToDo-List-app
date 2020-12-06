import React from 'react';
import './App.css';
import ToDoList from "./ToDoList.js"
import { Route, Switch } from "react-router-dom"  
import Contect from './contect.js';
import Menu from './Menu';



function App(){
  
  return(
    <>
    <Menu/>
    <Switch>

    <Route exact path="/" component={ToDoList}/>
    <Route  path="/contect/" component={Contect}/>
    
    </Switch>
   
    </>
  )
}
  



    export default App;