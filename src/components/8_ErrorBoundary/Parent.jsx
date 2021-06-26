import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

    state = {
        hasError : ''
    }

    static getDerivedStateFromError(error){
        console.log(error);
        return {hasError: error}
    }

    componentDidCatch(){
        console.log("some errors ??")
    }
    render() {
        return (
            <div>
                <h2> I am Parent</h2>
                {this.state.hasError ? <h2> the current net is not availiable</h2> : <Child/>}
               
            </div>
        )
    }
}
