import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const name = 'Edward the sexiest guy';
    const tmp = 'edward';
    const value = 2;
    const style = {
      backgroundColor: 'blue',
      padding: '16px',
      color: 'white',
      fontSize: '36px'
    };
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to AVAI World</h1>
          </header>
          <p className="App-intro">
            <input type="button" value="사진을 넣으시오" />
          </p>

          <input type="text" value="hello, Edworld!!! " />
          <p style={style}>Yo! {name}</p>

          {1 + 1 === 2 ? 'correct' : 'wrong'}
          {tmp === 'edward' && <div>edward is super sexy guy</div>}
          {(() => {
            if (value === 1) return <div className="App-ed">{value} 이다.</div>;
            if (value === 2) return <div className="App-ed">{value} 이다.</div>;
            if (value === 3) return <div className="App-ed">{value} 이다.</div>;
            return <div>없다</div>;
          })()}
        </div>
      </Fragment>
    );
  }
}

export default App;
