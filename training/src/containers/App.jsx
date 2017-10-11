import React from 'react';



class Workers extends React.Component {
  constructor() {
    super();
    this.state = {
      showInput: false
    }
  }

  showHideInput() {
    this.setState({showInput: !this.state.showInput});
  }

  render() {
    return <li>{this.props.surname} {this.state.showInput ? (<input type="text" onBlur={::this.showHideInput()}/>) : (<a href="#" onClick={::this.showHideInput}>Edit</a>)}</li>
  }
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        {surname: 'Иванов'},
        {surname: 'Петров'},
        {surname: 'Сидоров'},
      ]
    };
  }

  render() {
    const WorkersTable = this.state.users.map((item, index) => {
      return <Workers
             surname = {item.surname}
             key={index}
             index={index}
             />;
    });
    return <ul>
      {WorkersTable}
    </ul>
  }
}


export default App;

