import React from 'react'
import FileInput from '../FileInput'
import {
  shallow
} from 'enzyme'


var element;
function captureFileEl(input){
    element = input;
};

describe('<FileInput/>', () => {
  
  let testHandleChange = jest.fn();
 
  it('Renders FileInput with Props', () => {
    const wrapper = shallow( < FileInput label='TestLabel' name='TestName' handleFileChange={testHandleChange} captureFileEl={captureFileEl} / > );
    expect(wrapper.find('label').prop('htmlFor')).toEqual('TestName');
    expect(wrapper.find('label').text()).toEqual('TestLabel');
    expect(wrapper.find('input').prop('name')).toEqual('TestName');
  });

  
})
