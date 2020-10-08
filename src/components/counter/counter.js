import React from 'react';
import {Link} from "react-router-dom";
import '../../style/counter.css'

class Counter extends React.Component{
    constructor() {
        super();
        this.state={
           counter:''
           }

        }

    handleInput = () => {
        this.setState({
            calculates: this.state.calculates+String(event.target.value)
        })
    }

    handleReset = () => {
        this.setState({
            calculates:''
        })
    }

    handleCalculate = () => {
        const regex = /\d+[\+\-\*]\d+/;
        if (this.state.calculates.replace(regex,'').length !==0) {
            this.handleReset();
        } else {
            this.setState({
                calculates: eval(this.state.calculates)
            })
        }
    }

    render(){
        return(
            <div className="counter">
                <h1>在线计算器</h1>
                <div className="counterBody">
                    <div className="myInput">
                        <input type='text' readOnly={true} value={this.state.counter}/>
                    </div>
                    <div className="myOpera">
                        <button onClick={this.handleInput} id="add" value="+" >+</button>
                        <button onClick={this.handleInput} id="minus"  value="-">-</button>
                        <button onClick={this.handleInput} id="multiply"  value="*">*</button>
                    </div>
                    <div className="myNumber">
                        <button onClick={this.handleInput} id="seven" value="7">7</button>
                        <button onClick={this.handleInput} id="eight" value="8">8</button>
                        <button onClick={this.handleInput} id="nine" value="9">9</button>
                    </div>
                    <div className="myNumber">
                        <button onClick={this.handleInput} id="four" valufivee="4">4</button>
                        <button onClick={this.handleInput} id="five" value="5">5</button>
                        <button onClick={this.handleInput} id="six" value="6">6</button>
                    </div>
                    <div className="myNumber">
                        <button onClick={this.handleInput} id="one" value="1">1</button>
                        <button onClick={this.handleInput} id="two" value="2">2</button>
                        <button onClick={this.handleInput} id="three" value="3">3</button>
                    </div>
                    <div className="myNumber">
                        <button onClick={this.handleInput} id="zero" value="0">0</button>
                        <button id="clearBtn" onClick={this.handleReset}>clear</button>
                        <button id="equalBtn" onClick={this.handleCalculate}>=</button>
                    </div>
                    
                </div>
                <Link to='/' id="myLink">回到主页</Link>
            </div>
        );
    }

}
export default Counter;