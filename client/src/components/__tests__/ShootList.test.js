import React from 'react'
import ShootList from '../ShootList'
import {
  shallow
} from 'enzyme'


describe('<ShootList/>', () => {

  let videos = [{'id': '100'},{'id': '200'}]  

  it('Renders List of Shoot Videos', () => {
    const wrapper = shallow( < ShootList videos={videos} / > );
    expect(wrapper.find('Shoot').length).toBe(2);
    expect(true).toEqual(true);
  });
})
