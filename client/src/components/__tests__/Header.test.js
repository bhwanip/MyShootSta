import React from 'react'
import Header from '../Header'
import {
  shallow
} from 'enzyme'


describe('<Header/>', () => {

  it('Renders with List Navigation as Home "/"', () => {
    const wrapper = shallow( < Header / > );
    expect(wrapper.find('div>div>nav>IndexLink').prop('to')).toEqual('/');
    expect(wrapper.find('div>div>nav>IndexLink').prop('children')).toEqual('List');
  });

  it('Renders with Upload Navigation as "/upload"', () => {
    const wrapper = shallow( < Header / > );
    expect(wrapper.find('div>div>nav>Link').prop('to')).toEqual('upload');
    expect(wrapper.find('div>div>nav>Link').prop('children')).toEqual('Upload');
  });

  it('Navigation styling is centerally aligned', () => {
    const wrapper = shallow( < Header / > );
    expect(wrapper.find('div.container-fluid>div.row.text-centre.justify-content-center').length).toBe(1);
  });

})
