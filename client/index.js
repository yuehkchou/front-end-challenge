/* Entry point for the application,
  Display all components here and pass it to
  id='root' in HTML
*/
import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <a href="index.html">main</a>
        <a href="./components/about.html"> about </a>
        <Main />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
