import React, { Component } from 'react';
import { Card, Col } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

// Using class based component as there is an ongoing issues using enzyme and testing functional components - https://github.com/airbnb/enzyme/issues/2011
class UserCard extends Component {
  state = {
    rating: 0
  };

  handleStarClick = e => this.setState({ rating: e });

  render() {
    const { rating } = this.state;
    const { user } = this.props;
    return (
      <Col>
        <Card
          style={{ width: '18rem', marginBottom: 20 }}
          className="user-container"
        >
          <Card.Img variant="top" src={user.avatar} height={200} />
          <Card.Body>
            <Card.Title>{`${user.first_name} ${user.last_name}`}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
          </Card.Body>
          <Card.Footer style={{ display: 'flex', justifyContent: 'center' }}>
            <StarRatingComponent
              name={`user-${user.id}-rating`}
              starCount={5}
              value={rating}
              onStarClick={e => this.handleStarClick(e)}
            />
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}

UserCard.defaultProps = {
  user: {}
};

export default UserCard;
