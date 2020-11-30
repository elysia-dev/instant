import React, { Component } from 'react';
import ElysiaLogo from '../src/src/shared/image/Elysia_Logo.png';
import '../src/src/css/style.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="header-container">
          <img src={ElysiaLogo} className="elysia-logo" alt="Elysia" />
          <nav className="header-link-wrapper">
            <p className="header-link service">
              {/* eslint-disable-next-line */}
              <a href='#'>서비스</a>
            </p>
            <p className="header-link milestone">
              {/* eslint-disable-next-line */}
              <a href='#'>마일스톤</a>
            </p>
            <p className="header-link team">
              {/* eslint-disable-next-line */}
              <a href='#'>팀</a>
            </p>
            <p className="header-link partners">
              {/* eslint-disable-next-line */}
              <a href='#'>협력업체</a>
            </p>
            <p className="header-link contect">
              {/* eslint-disable-next-line */}
              <a href='#'>문의하기</a>
            </p>
          </nav>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
