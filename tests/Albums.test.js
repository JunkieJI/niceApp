import React from 'react';
import { mount } from 'enzyme';
import Albums from '../src/Albums';

const res = [
  {
    userId: 1,
    id: 1,
    title: "quidem molestiae enim"
  },
  {
    userId: 1,
    id: 2,
    title: "sunt qui excepturi placeat culpa"
  },
  {
    userId: 1,
    id: 3,
    title: "omnis laborum odio"
  }
];

describe('Albums Tests', () => {
  it('renders the correct number of albums', () => {
    const wrapper = mount(<Albums />);
    expect(wrapper.find(".album-container").length).toEqual(0);
    wrapper.setState({albums: res});
    expect(wrapper.find(".album-container").length).toEqual(3);
  });
});