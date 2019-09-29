import React from 'react';
import { mount } from 'enzyme';

import UserCard from '../src/Users/UserCard';

const user =
{
  id: 1,
  email: "george.bluth@reqres.in",
  first_name: "George",
  last_name: "Bluth",
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
};

describe('UserCard Tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<UserCard user={user}/>);
  });

  it('renders the avatar as the image', () => {
    expect(wrapper.find('.card-img-top').first().prop('src')).toEqual(user.avatar);
  });

  it('renders the user first + last name as the title', () => {
    expect(wrapper.find('.card-title').first().text()).toEqual(`${user.first_name} ${user.last_name}`);
  });

  it('renders the email as the description', () => {
    expect(wrapper.find('.card-text').first().text()).toEqual(user.email);
  });

  it('renders the ratings', () => {
    expect(wrapper.exists('.dv-star-rating')).toEqual(true);
  });

  it('should have 0 stars initially' , () => {
    expect(wrapper.find('.dv-star-rating-full-star').length).toEqual(0);
  });

  it('should have 1 stars when state is updated' , () => {
    wrapper.setState({rating: 1});
    expect(wrapper.find('.dv-star-rating-full-star').length).toEqual(1);
  });

  it('should have 2 stars when state is updated' , () => {
    wrapper.setState({rating: 2});
    expect(wrapper.find('.dv-star-rating-full-star').length).toEqual(2);
  });

  it('should have 3 stars when state is updated' , () => {
    wrapper.setState({rating: 3});
    expect(wrapper.find('.dv-star-rating-full-star').length).toEqual(3);
  });

  it('should have 4 stars when state is updated' , () => {
    wrapper.setState({rating: 4});
    expect(wrapper.find('.dv-star-rating-full-star').length).toEqual(4);
  });

  it('should have 5 stars when state is updated' , () => {
    wrapper.setState({rating: 5});
    expect(wrapper.find('.dv-star-rating-full-star').length).toEqual(5);
  });
});