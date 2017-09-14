import React, {Component} from "react";


class Calculator2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Ce  lsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <temperatureVerdict
          celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}
export default Calculator2;



