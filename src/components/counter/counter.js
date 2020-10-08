import React from 'react';
import '../../style/counter.css'

class Counter extends React.Component{
    constructor() {
        super();
        this.state={
            num1: 0,
            num2: 0,
            result: 0,
            opera: '',

        }
    }
    render(){
        return(
            <div className="counter">
                <h1>在线计算器</h1>
                <div className="counterBody">
                    <div className="myInput">
                        <input />
                    </div>
                    <div className="myOpera">
                        <button>+</button>
                        <button>-</button>
                        <button>*</button>
                    </div>
                    <div className="myNumber">
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                    </div>
                    <div className="myNumber">
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                    </div>
                    <div className="myNumber">
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                    </div>
                    <div className="myNumber">
                        <button>0</button>
                        <button id="clearBtn">clear</button>
                        <button id="equalBtn">=</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;