import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Router } from 'react-router';

describe('<App/>', () => {

  it('Renders Router Component', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(Router).length).toBe(1);
  });
})
