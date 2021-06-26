import React, { Component } from 'react'
import './index.css'
import C from '../1_setState'

export default class Parent extends Component {
    render() {
        return (
            <div className="parent">
                <h3> I am parent </h3>
                <A render={(name)=><C name={name}/>}/>

            </div>
           
        )
    }
}

class A extends Component {
    state = {name: 'tom'}
    render() {
        console.log(this.props);
        const {name} = this.state
        return (
            
            <div className="a">
                <h3> I am parent </h3>
                {this.props.render(name)}
                
            </div>
        )
    }
}


class B extends Component {
    render() {
        return (
            <div className="b">
                <h3> I am parent </h3>
                {this.props.name}
            </div>
        )
    }
}
