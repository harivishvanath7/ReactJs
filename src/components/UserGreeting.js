import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
 
// Short Circuit Operator Conditional Rendering
  render() {
    
        return this.state.isLoggedIn && <div>Hello Hari!!</div>

  }
}

export default UserGreeting








// //if-else Conditional Rendering
//   render() {
//         if (this.state.isLoggedIn) {
//             return(
//                 <div>
//                     Hello Hari!!
//                 </div>
//             )
//         } else {
//             return(
//                 <div>
//                     Hello Guest
//                 </div>
//             )
//         }

//   }



// Element variables Conditional Rendering
//   render() {
//     let message
//         if (this.state.isLoggedIn) {
//             message = <div>Hello Hari</div>
//         } else {
//             message = <div>Hello Guest</div>
//         }

//         return <div>{message}</div>

//   }
// }



// Ternary Operator Conditional Rendering
//   render() {
    
//         return this.state.isLoggedIn ?(
//             <div>Hello Hari</div>
//         ) :
//         (<div>Hello Guest</div>)

//   }