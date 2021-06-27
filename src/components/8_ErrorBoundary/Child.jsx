import React, { Component } from 'react'

export default class Child extends Component {

    state = {
        users:[
            {id:'001', name:'tom', age:18},
            {id:'002', name:'jj', age:19},
            {id:'003', name:'fei', age:10}
        ]
    
    }


    render() {
       
        return (
            <div>
                I am child 123
                {
                    this.state.users.map((Obj)=>{
                        return <h4 key={Obj.id}>{Obj.name}-----{Obj.age}</h4>
                    })
                }
            </div>
        )
    }
}
