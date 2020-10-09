import React from 'react';
import {Link} from "react-router-dom";
import '../../style/timer.css';

class Timer extends React.Component{
    constructor(){
        super();
        this.state ={
            presetTime:0,
            ShowTime:'Start',
        }
    }

    setTime = (event) => {
        this.setState(
            {
                presetTime:event.targrt.value
            }
        )
    }
    

    StartTimer = () => {
      if(this.presetTime>0){
          this.setState({
              ShowTime: this.presetTime-1
          })
      }else{
          this.setState({
              ShowTime:"End"
          })
      }

      setTimeout(()=>{
          this.StartTimer();
      },1000);
    }


    render(){
        return(
            <div className="timer">
                <h1>
                    在线倒计时器
                </h1>
                <div>
                    <div className="leftDiv">
                        <p>设置时间 <input onChange={this.setTime}></input></p>
                        <button onClick={this.StartTimer}>Start</button>
                    </div>
                    <div className="RightDiv">
                        <input id="showInput" value={this.state.ShowTime} readOnly="true"></input>
                    </div>
                </div>
                <Link to='/' id="myLink1">回到主页</Link>
            </div>
        );
    }
}

export default Timer;