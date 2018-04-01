import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// const user = {
//     name : "viet",
//     email: "zing.vn@gmail.com"
// }
// const element = <h1> hello : {user.name}, email : {user.email}</h1>
// const e2 =(
//     <div> 
//   <h1> halu </h1>
//   <h2> Heading 2 hello : {user.name}, email : {user.email} </h2>
//     </div>
// )
// var number = [1,2,3,4,5];
// var nhan2 = number.map(function(so){
//     return so*2 ; 
// })
// var e3 = (
//     <h3>
//         so la :  {nhan2}
//     </h3>
// )

// var counter = 0 ; 
// function update1(){
//     const  e4 = (
//         <h1> day la react </h1>
//     );
// }
// setInterval(update1,1000);
 
// export default class ToggleButton extends Component {
//     constructor(props){super(props); }
//     render() {
//     return (
//       <div>
//         <button> Nut click </button>
//       </div>
//     )
//   }
// }

// function UserInfo(props){
//     return (
//         <div>
//             <p> Name : {props.name}</p>
//             </div>
//     )
// }
// // import React, { Component } from 'react'

//  class User2 extends React.Component {
//   render() {
//     return (
//       <div>
//         <p> Name : {this.props.name}</p>
//       </div>
//     )
//   }
// }




//   class U3 extends React.Component {
//       constructor(props){
//           super(props);
//           this.state ={seconds : 0 };
//       }
//   render() {
//     return (
//       <div>
//           <h3> this is state </h3>
//       </div>
//     )
//   }
// }



ReactDOM.render(
    <App/>
    , document.getElementById('root'));
registerServiceWorker();
