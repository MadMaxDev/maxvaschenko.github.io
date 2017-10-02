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
      restTimerStarted: false,
      seconds: 0,
      targetMin: 5,
      targetMinFroze: 0,
      restMin: 5
    };
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
    {this.state.timerStarted ? ::this.timerOff() : ::this.timerOn()}
  }


  render() {
    if (this.state.targetMin === 0 && this.state.seconds === 0 && this.state.timerStarted === true) {confirm('Время' +
      ' вышло. Хотите' +
      ' отдохнуть?') ? this.setState({targetMin: this.state.restMin, restTimerStarted: true, timerStarted: false}) : ::this.timerOff()}
    if(this.state.targetMin === 0 && this.state.seconds === 0 && this.state.restTimerStarted === true) {alert('Время' +
      ' отдыха окончено, запустите новый отрезок!'); this.setState({restTimerStarted: false}); clearInterval(this.stopTimer)}
    return (
      <__StyledElem__>
        <div className="container-timer">
          <div className="chooseWrap">
            <div className="restInterval">
              <p>Rest</p>
              <__Button__ buttonName="+" clickEvent = {::this.handleRestPlusClick} className={'btn' +
              ' btn-outline-success'}></__Button__>
              {this.state.restMin}
              <__Button__ buttonName="-" clickEvent = {::this.handleRestMinusClick} className={'btn btn-outline-danger'}></__Button__>
            </div>
            <div className="targetMin">
              <p>Target</p>
              <__Button__ buttonName="+" clickEvent = {::this.handleTargetPlusClick} buttonEnable={this.state.timerStarted} className={'btn' +
                ' btn-outline-success'}></__Button__>
              {this.state.timerStarted ? this.state.targetMinFroze : this.state.targetMin}
              <__Button__ buttonName="-" clickEvent = {::this.handleTargetMinusClick} buttonEnable={this.state.timerStarted} className={'btn btn-outline-danger'}></__Button__>
            </div>
          </div>
          <div className="containerTimerLog">
            <div className="timerLog" onClick={::this.timerHandler}>
            <span>
              {this.state.targetMin}:{this.state.seconds < 10 ? '0'+this.state.seconds : this.state.seconds}
            </span>
            </div>
          </div>
        </div>
      </__StyledElem__>

    );
  }
}


export default App;
