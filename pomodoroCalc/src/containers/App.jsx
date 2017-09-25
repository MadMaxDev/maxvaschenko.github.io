import React from 'react';
import { Component } from 'react';
import ReactTimeout from 'react-timeout';
import __StyledElem__ from '../containers/styled';
import __Button__ from '../components/button/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStarted: false,
      seconds: 59,
      targetMin: 25,
      restMin: 5
    };
    this.handleTargetPlusClick = this.handleTargetPlusClick.bind(this);
    this.handleTargetMinusClick = this.handleTargetMinusClick.bind(this);
    this.handleRestPlusClick = this.handleRestPlusClick.bind(this);
    this.handleRestMinusClick = this.handleRestMinusClick.bind(this);
    this.timerOn = this.timerOn.bind(this);
  }

  handleTargetPlusClick(e) {
    this.setState({
      targetMin: (this.state.targetMin > 0) ? this.state.targetMin + 1 : 0
    });
  }

  handleTargetMinusClick(e) {
    this.setState({
      targetMin: (this.state.targetMin > 0) ? this.state.targetMin - 1 : 0
    })
  }
  handleRestPlusClick(e) {
    this.setState({
      restMin: (this.state.restMin >= 0) ? this.state.restMin + 1 : 0

    })
  }
  handleRestMinusClick(e) {
    this.setState({
      restMin: (this.state.restMin > 0) ? this.state.restMin - 1 : 0
    })
  }

  timerOn(e) {
    this.setState({timerStarted: !this.state.timerStarted});
    setInterval(() => {this.setState(
      {seconds: (this.state.seconds === 0) ? 59 : this.state.seconds - 1,
       targetMin: (this.state.seconds === 0) ? this.state.targetMin - 1 : this.state.targetMin,
      }
    )
    }, 1000);
  }

  render() {
    const secondsInTimer = 60 - this.state.seconds;
    return (
      <__StyledElem__>
        <div className="container-timer">
          <div className="chooseWrap">
            <div className="restInterval">
              <p>Rest</p>
              <__Button__ buttonName="+" clickEvent = {this.handleRestPlusClick}></__Button__>
              {this.state.restMin}
              <__Button__ buttonName="-" clickEvent = {this.handleRestMinusClick}></__Button__>
            </div>
            <div className="targetMin">
              <p>Target</p>
              <__Button__ buttonName="+" clickEvent = {this.handleTargetPlusClick}></__Button__>
              {this.state.targetMin}
              <__Button__ buttonName="-" clickEvent = {this.handleTargetMinusClick}></__Button__>
            </div>
          </div>
          <div className="timerLog" onClick={this.timerOn}>
            <span>
              {this.state.targetMin}:{this.state.timerStarted ? this.state.seconds : '00'}
            </span>
          </div>
        </div>
      </__StyledElem__>

    );
  }
}


export default App;
