import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// class Demo extends Component {
//     state = {count:0}

//     myRef = React.createRef()

//     add =()=>{
//         this.setState(state => ({count: this.state.count+1}))
//     }
//     componentDidMount(){
//         this.timer = setInterval(()=>{
//             this.setState(state => ({count: state.count+1}))
//         },1000)
//     }
//     unmount = () =>{
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }

//     show = ()=>{
//         alert(this.myRef.current.value)
//     }

//     componentWillUnmount(){
//         clearInterval(this.timer)
//     }

//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myRef}/>
//                 <h2>the current result is {this.state.count}</h2>
//                 <button onClick={this.add}>Click on Me</button>
//                 <button onClick={this.unmount}>uninstall component</button>
//                 <button onClick={this.show}>click alert</button>
//             </div>
//         )
//     }
// }

function Demo(){
    const [count,setCount] = React.useState(0)
    const myRef = React.useRef()

    React.useEffect(()=>{
        let timer = setInterval(()=>{
            setCount(count => count+1)
        },1000)
        return ()=> {
            clearInterval(timer)
        }
    },[])
    
    function add(){
        //setCount(count+1)
        setCount(count => count+1)
    }

    function show(){
        alert(myRef.current.value)
    }

    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
        return (
            <div>
                <input type="text" ref={myRef}/>
                <h2>the current result is {count}</h2>     
                <button onClick={add}>Click on Me</button>
                <button onClick={unmount}>Click on Me</button>
                <button onClick={show}>click me show</button>
               
            </div>
        )
}

export default Demo