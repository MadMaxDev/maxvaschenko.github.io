import React, {Component} from "react";
import ReactDOM from 'react-dom';


const Friends = [
  {
    userNumber: 'user 1',
    name: 'Petro',
    info: 'Scientist'
  },
  {
    userNumber: 'user 2',
    name: 'Vasyl',
    info: 'Developer'
  },
  {
    userNumber: 'user 3',
    name: 'Ivan',
    info: 'Driver'
  }
];

class ListItem extends Component{
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.listOpenClick = this.listOpenClick.bind(this);
  };

  listOpenClick = e =>  {
    e.preventDefault();
    this.setState({visible: true})
  };

  render() {
    const data = this.props.data;
    const UserTemplate = data.map ((item, index) => {
      return (
        {this.state.visible = true ? (
          <div key={index}>
          <ul  className={'user collection'}>
            <li className="userName collection-item">{item.name}</li>
            <li className="userInfo collection-item">{item.info}</li>
          </ul>
        </div>):null}
        )
    });
    return (
      <div className="users">
        {UserTemplate}
      </div>
    )
  }
};

class ParentList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = this.props.data;
    const userNumberTemplate = data.map ((item, index) => {
      return (
        <div key={index}>
          <h5>{item.userNumber}</h5>
        </div>
      )
    });
    return (
      <div>
        {userNumberTemplate}
      </div>
    )
  }
}


class App extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className="main">
        <ParentList data={Friends}/>
        <ListItem data = {Friends}/>
      </div>

    )
  }
};

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
