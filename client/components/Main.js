/*
  Main Component of the Application
  Make API Call and collect the information
  ans pass to children components
*/

import React from 'react';
import { render } from 'react-dom';
import { ListGroupItem, ListGroup, Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      data: []
    }
  }
  // When this component is loaded make the API Get request to server
  // Break down JSON object to several parts to get users
 // resp.data.response.locations
  componentWillMount() {
    axios.get('/api/posse')
    .then((resp) => {
      let users = [];
      this.setState({ data: resp.data.response.locations })
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
    const userInstance = this.state.users.map((user, i) => {
      return (
        <ListGroupItem>
          <img className="avatar" src="/assets/avatar.png" />
          <p className="userName"><strong>{user.name}</strong></p>
          <p>{user.phone}</p>
          <p>{user.weight}</p>
          <p>favorite color: {user.favorite_color}</p>
         </ListGroupItem>
      )
    })
    const mapInstance = this.state.data.map((location, ind) => {
      return (
        <Col sm={8} md={4}>
          <p> <strong> {location.locality} </strong> {location.region}, {location.postal_code}</p>
        </Col>
      )
    })
    return (
      <div className="main" id="main">
        <div className="main-content">
          <h1> Welcome to the Main Page </h1>
          <p> You have just stepped into this new page!</p>
        </div>
        <div className="main-info">
          <h3><strong>Mobile Design</strong> & Development</h3>
          <ListGroup id="list-group">
            {userInstance}
          </ListGroup>
        </div>
        <div className="list-info">
          <Grid>
            <Row>
              <h2 id="company-info"> Company Location: </h2>
              {mapInstance}
            </Row>
          </Grid>
        </div>
        <footer className="footer-content">
          <div>
            <p> For more information contact me </p>
            <p> I really enjoy penutbutter toast crunch</p>
          </div>
        </footer>
      </div>
    )
  }
}



export default Main;
