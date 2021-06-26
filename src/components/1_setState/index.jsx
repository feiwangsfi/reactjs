import React, { Component } from 'react'

export default class Demo extends Component {

    state = {count:0}
    add = ()=> {
        
        // const { count } = this.state
        // this.setState({count: count+1},()=>{

        // })
        // this.setState((state,props)=>{
        //     return {count:state.count+1}

        // })
        this.setState(state => ({count:state.count+1}))
       // this.setState({count: this.state.count+1})

    }

    render() {
        return (
            <div>
                <h1>the current count is {this.state.count}</h1>
                <button onClick={this.add}>click me + 1</button>
            </div>
        )
    }
}
