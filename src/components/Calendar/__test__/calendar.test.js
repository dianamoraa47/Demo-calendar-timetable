import React from 'react';
import ReactDOM from 'react-dom';
import Testing from "./components/Testing/Testing";
it ("it renders", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Testing></Testing>, div)
})