import React, { Component } from 'react';
import './Counter.css';
import PropTypes from 'prop-types'


class Counter extends Component{
    constructor(){
        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    render(){
        return (
            <div className="Counter">
                <CounterButton byVal={1} incrementMethod ={this.increment} decrementMethod ={this.decrement}/>
                <CounterButton byVal={5} incrementMethod ={this.increment} decrementMethod ={this.decrement}/>
                <CounterButton byVal={10} incrementMethod ={this.increment} decrementMethod ={this.decrement}/>
                
                <span className="count">{this.state.counter} </span>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }

    increment( byVal)  { //Update state - counter++ 
        console.log(`Increment button has been clicked - ${byVal}`)
        this.setState( (prevState) => { 
            return {
                counter : prevState.counter + byVal
            }
        })
    }

    decrement(byVal){
        this.setState( (prevState) => {return {counter : prevState.counter - byVal}})
    }

    reset(){
        this.setState(() => {return {counter : 0}})
    }

}

class CounterButton extends Component{

    render()  {
        return(
            <div className = "counter">
                <button onClick={() => this.props.incrementMethod(this.props.byVal) } >+{this.props.byVal}</button>
                <button onClick={() => this.props.decrementMethod(this.props.byVal) } >-{this.props.byVal}</button>
            </div>
        )
    }

    
}

CounterButton.defaultProps = {
    byVal : 1
}

CounterButton.propTypes = {
    byVal: PropTypes.number
}

export default Counter