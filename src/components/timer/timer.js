import React from 'react';
import {Link} from "react-router-dom";
import '../../style/timer.css';

class Timer extends React.Component{
    render(){
        return(
            <div className="timer">
                <h1>
                    在线倒计时器
                </h1>
                <div>
                    <div className="leftDiv">
                        <p>设置时间 <input></input></p>
                        <button>Start</button>
                    </div>
                    <div className="RightDiv">
                        <input id="showInput"></input>
                    </div>
                </div>
                <Link to='/' id="myLink1">回到主页</Link>
            </div>
        );
    }
}

export default Timer;