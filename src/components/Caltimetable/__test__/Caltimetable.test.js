import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Caltimetable from "./../caltimetable";
//import 'jest-dom/extend-expect';
//import renderer from 'react-test-renderer';


  
it ("it renders", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Caltimetable></Caltimetable >, div)
})
     
it("renders", ()=>{

    const {getByTestid}= render(<Caltimetable></Caltimetable >, div)
    expect(getByTestid('Caltimetable')).toHaveTextContent("")

})

// it("renders", ()=>{

//     const {getByTestid}= render(<Caltimetable></Caltimetable >, div)
//     expect(getByTestid('Caltimetable')).toHaveTextContent("")
    
// })



// it("matches snapshot", ()=>{
// const tree = renderer.create(<Caltimetable></Caltimetable>).toJSON()
//     expect(getByTestid('Caltimetable')).toHaveTextContent("")
//     expect(tree).toMatchSnapshot();
// }) 