import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';
import Albums from '../src/Albums';

describe('Appjs Tests', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(Albums)).toEqual(true);
  });
});