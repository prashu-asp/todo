import React, { Component } from 'react'


class Todo extends Component {
    state = {  
        value:[],
        inp:''
    } 
    

    handleInput = (e) => {
            this.setState({inp : e.target.value})
            
    }

    handleAdd = (e) => {
        this.state.value.push(this.state.inp)
        this.setState({inp:''})
    }
    
    resetInput = (key) => {
        console.log(key)
        let array = [...this.state.value]
        if (key > -1) {
            array.splice(key, 1);
          }
        this.setState({value : array})
    }

    
    render() { 
        return (
            <div>
               <input type="text" placeholder='Add items' value={this.state.inp} onChange = { this.handleInput} ref='inpt'></input>
               <button onClick={this.handleAdd}>Add</button>
               <ul>
                   {this.state.value.map(i => <li key={this.state.value.indexOf(i)} >{i} <button onClick={()=>this.resetInput(this.state.value.indexOf(i))}>Delete</button> </li>)} 
                
               </ul>
               
            </div>
        );
    }
}
 
export default Todo;