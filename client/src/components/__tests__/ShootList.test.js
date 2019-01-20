import React from 'react'
import ShootList from '../ShootList'
import {
  shallow
} from 'enzyme'


describe('<ShootList/>', () => {

  let videos = [{'url': 'http://test_01.com', 'title': 'title_01', 'editor':'editor_01'},{'url': 'http://test_02.com', 'title':'title_02','editor':'editor_02'}]  

  it('Renders List of Shoot Videos', () => {
    const wrapper = shallow( < ShootList videos={videos} / > );
    expect(wrapper.find('Shoot').length).toBe(2);
    expect(true).toEqual(true);
  });
})
