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

// //<===creating h1 element, Paragraph with today's date and current time==============>

// const name = "Rosy";
// const current = new Date().toLocaleDateString();
// const currentTime = new Date().toLocaleTimeString();


// ReactDOM.render(
//   <>
//   <h1> 
//     Hello, My name is {name}
//     </h1>
//     <p> Today's date is = {current} </p>
//     <p> Current Time is = {currentTime} </p>
//     </>, document.getElementById("root")
// );

// <==== JSX Attribute in react ====>

const name = "Joanie"
const img1 = "https://picsum.photos/id/237/50/100";
const img2 = "https://picsum.photos/id/237/10/20";
const img3 = "https://picsum.photos/id/237/50/100";
const img4 = "https://picsum.photos/id/237/100/200";
const img5 = "https://picsum.photos/id/237/300/300";
const link = "https://au.linkedin.com/in/rosydhakal";


ReactDOM.render(
  <>
  <h1 contentEditable= "true"> My name dog's name is {name} </h1>
  <img src = {img1} alt='image of my dog'/>
  <img src = {img2} alt='image of my dog'/>
  <img src = {img3} alt='image of my dog'/>
  <img src = {img4} alt='image of my dog'/>
  <a href={link} target='_blank' > Click me
  
  <img src = {img5} alt='image of my dog'/> </a>
 


  </>, document.getElementById("root")
);