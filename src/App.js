import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import InputValidation from './InputValidation/InputValidation';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    users: [{ user: 'Brad' }, { user: 'Mary' }],
    length: 4,
  };

  changedUserNameEventHandler = (e) => {
    this.setState({
      users: [{ user: e.target.value }, { user: 'Mary' }],
      length: e.target.value.length,
    });
  };

  deleteCharHandler = (charIndex) => {
    const chars = this.state.users[0].user.split('');
    chars.splice(charIndex, 1);
    console.log(chars);
    this.setState({ users: [{ user: chars }, { user: 'Mary' }] });
    // this.setState({ users: [{ user: chars }, { user: 'Mary' }] });
  };

  render() {
    let chars = (
      <div>
        {this.state.users[0].user.split('').map((c, charIndex) => {
          return (
            <CharComponent key={`char${charIndex}`} click={() => this.deleteCharHandler(charIndex)} character={c} />
          );
        })}
      </div>
    );
    return (
      <div className="App">
        <UserInput
          changed={this.changedUserNameEventHandler}
          name={this.state.users[0].user}
          inputLength={this.state.length}
        />
        <InputValidation length={this.state.length} />
        {chars}
        <UserOutput name={this.state.users[0].user} />
        <UserOutput name={this.state.users[0].user} />
        <UserOutput name={this.state.users[1].user} />
      </div>
    );
  }
}

export default App;
