import React, {Component} from 'react';
import './App.css';
import Calendar from "./components/Calendar";

import Caltimetable from './components/Caltimetable/Caltimetable';


function App(){
  return (
    
    <div className="App">
      <Calendar/>
      <header className="App-header">
        <Caltimetable label="yes"></Caltimetable>
      </header>
    </div>
  );
}

// function App () Component {
//   render() {
//     return (
//       <div>
//         <Calendar/>
//      <header className="App-header"> <Caltimetable label "/> 
//      </header>
//        <div/>
//     );
//   }


export default App;
