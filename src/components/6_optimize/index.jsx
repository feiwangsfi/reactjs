import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {

    state = {carName: "benzC63", stus:[1,3,2,5]}
    changeCar = ()=>{
        this.setState({carName:"civic"})
    }
    addstus =()=>{
        const {stus} = this.state
        this.setState({stus:[55, ...stus]})
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     // console.log(nextProps, nextState);
    //     // console.log(this.props, nextProps);
    //     return this.props.carName === nextState.carName ? false : true
    // }

    render() {
        const {carName} = this.state
        return (
            <div className="parent">
                <h3> I am parent</h3>
                <span>my car is {carName}</span><br/>
                <span>I have {this.state.stus}</span>
                <button onClick={this.changeCar}> Click me to change car</button>
                <button onClick={this.addstus}>click me add a number</button>
                <Child carName={carName}/>
            </div>
        )
    }
}


class Child extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log(nextProps, nextState);
    //     console.log(this.props, nextProps);
    //     return this.props.carName === nextProps.carName ? false : true
    // }

    render() {
        return (
            <div className="child">
                <h3>i am child</h3>
                <span>I receive: {this.props.carName}</span>
            </div>
        )
    }
}