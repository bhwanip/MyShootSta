import React from 'react'
import Shoot from '../Shoot'
import {
  shallow
} from 'enzyme'

describe('<Shoot/>', () => {

    it('Verify all the props', () => {
        const wrapper = shallow( < Shoot url="http://test.com" title="TestTitle" editor="TestEditor" / > );
        expect(wrapper.find('source').prop('src')).toEqual('http://test.com');
        expect(wrapper.find('p').text()).toEqual('Editor : TestEditor');
        expect(wrapper.find('button').text()).toEqual('TestTitle');
      });

  })
  
