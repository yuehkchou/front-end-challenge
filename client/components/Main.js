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
    this.state = {
      users: []
    }
  }
  // When this component is loaded make the API Get request to server
  // Break down JSON object to several parts to get users
 // resp.data.response.locations
  componentWillMount() {
    axios.get('/api/posse')
    .then((resp) => {
      let users = [];
      console.log('resp', resp.data.response.locations)
      resp.data.response.locations.forEach((location) => {
        location.services.forEach((service) => {
          service.programmers.forEach((programmer) => {
            users.push(programmer)
            this.setState({ users: users })
          })
        })
      })
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="main" id="main">
        Cool beans man
      </div>
    )
  }
}



export default Main;
