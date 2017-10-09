import React from 'react';



// class Workers extends React.Component {
//   constructor() {
//     super();
//   }
//
//   render() {
//     return <tr>
//              <td>{this.props.family}</td><td>{this.props.age}</td><td><p onClick={this.props.linkAction.bind(null, this.props.index)}>Alert</p></td>
//            </tr>
//   }
// }


const Workers = (props) => {
  return <tr>
      <td>{this.props.family}</td><td>{this.props.age}</td><td><p onClick={::this.props.linkAction(null, this.props.family)}>Alert</p></td>
    </tr>
};


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        {surname: 'Иванов', age: 13},
        {surname: 'Петров', age: 14},
        {surname: 'Сидоров', age: 16},
      ]
    };
  }

  showMessage(index) {
    this.state.users.splice(index, 1);
    this.setState({users: this.state.users});
  }

  render() {
    const WorkersTable = this.state.users.map((item, index) => {
      console.log(item.surname);
      return <Workers
             family = {item.surname}
             age={item.age}
             key={index}
             index={index}
             linkAction={::this.showMessage}
             />;
    });
    return <table>
      <tbody>
      {WorkersTable}
      </tbody>
    </table>

  }
}


export default App;

