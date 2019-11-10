import React from 'react';
import logo from './logo.svg';
import './App.css';

interface IPropTypes {
}

interface IStateTypes {
  counter: number
}

class App<IPropTypes, IStateTypes> extends React.Component {
  static displayName = 'My App';

  state = {
    counter: 0
  }

  render() {
    return (
      <div data-test="component-pp" className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
