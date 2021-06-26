import React, { Component } from 'react'
import './index.css'

const MyContext = React.createContext()
const {Provider, Consumer} = MyContext
export default class A extends Component {

    state = {username:"tom", age:18}

    render() {
        const {username,age} = this.state
        return (
            <div className="parent">
                <h3>I am A</h3>
                <h4> My username is {username}</h4>
                <Provider value={{username:username,age:age}}>
                  <B/>
                </Provider>
            </div>
        )
    }
}


class B extends Component {
    render() {
        return (
            <div className="child">
                <h3>I am B</h3>
                <h4> My username from A is </h4>
                <C />
            </div>
        )
    }
}


// class C extends Component {
//     static contextType = MyContext
//     render() {
//         const {username, age} = this.context
//         return (
//             <div className="grand">
//                 <h3>I am C</h3>
//                 <h4> My username from A is {username} is {age} old </h4>
                
//             </div>
//         )
//     }
// }
function C(){
    return (
        <div className="grand">
            <h3>I am C</h3>
            <h4> My username from A is 
                <Consumer>
                    {
                        value =>{
                            return `${value.username}, is ${value.age} old`
                        }
                    }
                </Consumer>
            </h4>
            
        </div>
    )
}