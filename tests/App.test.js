import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';
import Users from '../src/Users';

describe('App Tests', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(Users)).toEqual(true);
  });
});