import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter,Link} from "react-router-dom";
import Home from "./Home";
import Counter from "../components/counter/counter";
import Timer from "../components/timer/timer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
            <ul>
            <li>
                <Link to='/timer'>在线倒计时器</Link>
              </li>
              <li>
                <Link to='/counter'>在线计算器</Link>
              </li>
              <li>
                <Link to='/'>HOME</Link>
              </li>
            </ul>

          <Route exact path='/' component={Home}/>
          <Route path='/counter' component={Counter}/>
          <Route path='/timer' component={Timer}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
