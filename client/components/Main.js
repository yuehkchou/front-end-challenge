/*
  Main Component of the Application
  Make API Call and collect the information
  ans pass to children components
*/

import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  // When this component is loaded make the API Get request to server
  componentWillMount() {
    axios.get('/api/posse')
    .then((resp) => {
      console.log(resp)
    })
  }
  render() {
    return (
      <div className="main" id="main">
        Cool beans man
      </div>
    )
  }
}



export default Main;
