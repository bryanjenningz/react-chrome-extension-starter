import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render = () => {
    return (
      <div>
        Hey
      </div>
    );
  }
}

const rootEl = document.createElement('div');
document.body.appendChild(rootEl);
render(<App />, rootEl);
