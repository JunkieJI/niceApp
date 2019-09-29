import React from 'react';
import { shallow } from 'enzyme';
import Users from '../src/Users';
import UserCard from '../src/Users/UserCard';

const res = {
  data: [
    {
      id: 1,
      email: 'george.bluth@reqres.in',
      first_name: 'George',
      last_name: 'Bluth',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'
    },
    {
      id: 2,
      email: 'janet.weaver@reqres.in',
      first_name: 'Janet',
      last_name: 'Weaver',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg'
    },
    {
      id: 3,
      email: 'emma.wong@reqres.in',
      first_name: 'Emma',
      last_name: 'Wong',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg'
    }
  ]
};

describe('Users Tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Users />);
    wrapper.setState({ users: res.data });
  });
  it('renders the correct number of cards', () => {
    expect(wrapper.find(UserCard).length).toEqual(3);
  });
});
