import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: 'Test'
    }
  }

  changeName = (event) => {
    this.setState({
      userName: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput typed={this.changeName} />
        <button onClick={this.changeName}>Change UserName</button>
        <UserOutput userName={this.state.userName} />
      </div>
    );
  };
}

export default App;
