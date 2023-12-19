import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <>
//   <h1> Netflix list </h1>
//   <p> Here are my favourite 5 series:</p>
//   <ol>
//     <li> I </li>
//     <li> Mine </li>
//     <li> You </li>
//     <li> We </li>
//     <li> our </li>
//   </ol>
// </>
  

//   , document.getElementById("root")

// );


//============Javascript Expression in JSX in ReactJs=========

// const fName = "Rosy Dhakal";
// ReactDOM.render(
//   <>
//   <h1> Hi my name is {fName} </h1>
//    <p> I am Super happy to learn React</p>
 
//    </>
// ,document.getElementById("root")

// );

//<=======Template Literals ============>
// const fName = "Rosy";
// const LName = "Dhakal";

// ReactDOM.render(
//   <>
//   <h1> 
//     {/* Hi My name is {fName +" " +LName} */}
//     {`Hi My name is ${fName} ${LName} `}
//   </h1>
//   <p>
//   </p>
//   </>, document.getElementById("root")
  
// )

//<===creating h1 element, Paragraph with today's date and current time==============>

const name = "Rosy";
const current = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();


ReactDOM.render(
  <>
  <h1> 
    Hello, My name is {name}
    </h1>
    <p> Today's date is = {current} </p>
    <p> Current Time is = {currentTime} </p>
    </>, document.getElementById("root")
);
