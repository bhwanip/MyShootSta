import React from 'react'
import TextInput from '../TextInput'
import {
  shallow,
  mount
} from 'enzyme'


describe('<TextInput/>', () => {
  
  let testHandleChange = jest.fn();
  
  it('Renders TextInput with Props', () => {
    const wrapper = shallow( < TextInput label='TestLabel' name='TestName' placeholder='TestPlaceHolder' value='TestValue' handleTextChange={testHandleChange} / > );
    expect(wrapper.find('label').prop('htmlFor')).toEqual('TestName');
    expect(wrapper.find('label').text()).toEqual('TestLabel');
    expect(wrapper.find('input').prop('placeholder')).toEqual('TestPlaceHolder');
    expect(wrapper.find('input').prop('name')).toEqual('TestName');
    expect(wrapper.find('input').prop('value')).toEqual('TestValue');
  });

   it('Handled Text Input Change Event', () => {
    const wrapper = mount( < TextInput label='TestLabel' name='TestName' placeholder='TestPlaceHolder' value='TestValue' handleTextChange={testHandleChange} / > );
    const input = wrapper.find('input');
    input.instance().value = "Changed";
    input.simulate('change', { target: { value: 'Changed' } });
    expect(testHandleChange).toHaveBeenCalledTimes(1);
  });
})
