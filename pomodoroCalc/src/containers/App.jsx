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
      seconds: 0,
      targetMin: 5,
      targetMinFroze: 0,
      restMin: 5
    };
    this.handleTargetPlusClick = this.handleTargetPlusClick.bind(this);
    this.handleTargetMinusClick = this.handleTargetMinusClick.bind(this);
    this.handleRestPlusClick = this.handleRestPlusClick.bind(this);
    this.handleRestMinusClick = this.handleRestMinusClick.bind(this);
    this.timerHandler = this.timerHandler.bind(this);
    this.timerOn = this.timerOn.bind(this);
    this.timerOff = this.timerOff.bind(this);

  }

  handleTargetPlusClick(e) {
    this.setState({
      targetMin: (this.state.targetMin >= 0) ? this.state.targetMin + 1 : 0
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

  timerOn() {
    this.setState({timerStarted: !this.state.timerStarted});
    this.setState({targetMinFroze: this.state.targetMin});
    // this.setState({targetMin: this.state.targetMin - 1});
    this.stopTimer = setInterval(() =>
    {this.setState(
      {seconds: (this.state.seconds === 0) ? (this.state.targetMin===0 ? 0 : 59): this.state.seconds - 1,
       targetMin: (this.state.targetMin > 0) ? ((this.state.seconds === 0) ? this.state.targetMin - 1 : this.state.targetMin) : 0}
    );
    }, 1000);
  }

  timerOff() {
    this.setState({timerStarted: !this.state.timerStarted});
    clearInterval(this.stopTimer)
  }

  timerHandler(e) {
    {this.state.timerStarted ? this.timerOff() : this.timerOn()}
  }


  render() {
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
              <__Button__ buttonName="+" clickEvent = {this.handleTargetPlusClick} buttonEnable={this.state.timerStarted}></__Button__>
              {this.state.timerStarted ? this.state.targetMinFroze : this.state.targetMin}
              <__Button__ buttonName="-" clickEvent = {this.handleTargetMinusClick} buttonEnable={this.state.timerStarted}></__Button__>
            </div>
          </div>
          <div className="timerLog" onClick={this.timerHandler}>
            <span>
              {this.state.targetMin}:{this.state.seconds < 10 ? '0'+this.state.seconds : this.state.seconds}
            </span>
          </div>
        </div>
      </__StyledElem__>

    );
  }
}


export default App;
