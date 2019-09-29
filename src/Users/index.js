import React, { Component } from 'react';
import { Container, Row, Col, CardDeck } from 'react-bootstrap';

import UserCard from './UserCard';

// Using class based component as there is an ongoing issue with testing state and functional components -
class Users extends Component {
  state = {
    users: [],
    rating: 0
  };

  componentDidMount() {
    fetch('https://reqres.in/api/users').then((res) => {
      return res.json();
    }).then((response) => {
      this.setState({users: response.data});
    })
  }

  renderUsers(users) {
    return users.map(user => {
      return (
        <UserCard key={user.id} user={user}/>
      );
    })
  };

  render() {
    const { users } = this.state;
    return (
      <Container className='users-container'>
        <Row><Col><h3>User Rating System</h3></Col></Row>
        <Row>
          <CardDeck>
              {this.renderUsers(users)}
          </CardDeck>
        </Row>
      </Container>
    )
  }
}

export default Users;