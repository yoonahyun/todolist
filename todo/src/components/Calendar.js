import React, {Component} from "react";
import Clock from 'react-live-clock';
import './Calandar.css';

class LiveClockTest extends Component{
  render(){

    return(
      <div>

        <Clock format={'YYYY년 MM월 DD일'} ticking={true} timezone={'KR/Pacific'}/>
      </div>
    )
  }
}

export default LiveClockTest;