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
        <Main />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
