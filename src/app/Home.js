import React from 'react';
import './home.less';
import {Link} from "react-router-dom";
import imgPath1 from '../images/calculator.png';
import imgPath2 from '../images/timer.png';

class Home extends React.Component{
  render(){
    return (
      <div className="home">
        <div className="mydiv">
          <p>在线实用工具</p>
        </div>
        <div className="mydiv1">
          <div className="counter">
            <img src={imgPath1} alt="loading..."></img>
            <Link to='/counter'>计算器</Link>
          </div>
          <div className="timer">
            <img src={imgPath2} alt="loading..."></img>
            <Link to='/timer'>倒计时器</Link>
          </div>
        </div>
      </div>
    
  );
  }
  
}

export default Home;