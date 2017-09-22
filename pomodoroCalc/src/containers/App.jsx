import React from 'react';
import { Component } from 'react';
import __StyledElem__ from '../containers/styled';
import __Button__ from '../components/button/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      targetMin: 0,
      pauseMin: 0
    };
    this.raiseNumber = this.raiseNumber.bind(this);
  }

  raiseNumber (event) {
    this.setState({targetMin: this.state.targetMin + 1});
  }


  render() {
    return (
      <__StyledElem__>
        <div className="container-timer">
          <div className="chooseWrap">
            <div className="restInterval">
              <p>Rest</p>
              <__Button__ buttonName="+" ></__Button__>
              {this.state.pauseMin}
              <__Button__ buttonName="-"></__Button__>
            </div>
            <div className="targetMin">
              <p>Target</p>
              <__Button__ buttonName="+" whenClicked={(event) => this.raiseNumber(event)}></__Button__>
              {this.state.targetMin}
              <__Button__ buttonName="-"></__Button__>
            </div>
          </div>
          <div>
            {this.state.minutes}:{this.state.seconds}
          </div>
        </div>
      </__StyledElem__>

    );
  }
}


export default App;
