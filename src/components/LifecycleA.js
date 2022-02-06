import React, { Component } from 'react';


class LifecycleA extends Component {
    constructor(props){
        super(props)

        this.state={
            name:"prashanth"
        }
        console.log('LifecycleA constructor')
    }
    

    static getDeriviedStateFromProps(props,state){
        console.log('LifecycleA getderivedStateFromProps')
        return null
    }
    

    componentDidMount(){
        console.log('LifecycleA componentdidmount')
    }


    render() { 
        console.log('LifecycleA render')
        return (
            <div>Lifecycle A</div>
        );
    }
}
 
export default LifecycleA;