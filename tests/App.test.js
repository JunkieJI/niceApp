import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('Appjs Tests', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').text()).toEqual('niceApp');
  });
});