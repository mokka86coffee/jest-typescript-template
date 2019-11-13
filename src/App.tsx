import React from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import './App.css';

interface IPropTypes {
}

interface IStateTypes {
  counter: number | string
}

class App<IPropTypes, IStateTypes> extends React.Component {
  static displayName = 'My App';

  state = {
    counter: 0
  }

  operation = (type: string) => {
    const { counter } = this.state;
    const isError = typeof counter === 'string';

    if (type === 'increase') {
      const trueValue = isError ? 0 : counter;
      this.setState({ counter: trueValue + 1 });
      return;
    }

    if (isError) {
      return;
    }

    this.setState({
      counter: counter === 0 ? 'Below 0, can\'t do it :)' : counter - 1
    });
  }

  render() {
    const {counter} = this.state;
    return (
      <div data-test="component-App" className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p data-test="component-counter-display">Counter {counter}</p>
          <button data-test="component-decrease-button" onClick={() => this.operation('decrease')}>Decrease</button>
          <button data-test="component-increase-button" onClick={() => this.operation('increase')}>Increase</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = () => ({a: 1});

export default connect(mapStateToProps)(App);