import React from 'react';
import renderer from 'react-test-renderer';

import UploadShootForm from '../UploadShootForm';

describe('<UploadShootForm/>', () => {
  it('should render correctly with success message', () => {

    let props = {
        message: 'Your Video has been uploaded sucessfully',
        hanleFormChange: jest.fn(),
        handleSubmit: jest.fn(),
        title: "TestTitle",
        editor: "TestEditor",
        label: "TestLabel",
        name: "TestName",
        handleTextChange: jest.fn(),
        captureFileEl: jest.fn(),
        handleFileChange: jest.fn()
    }

    let tree = renderer.create(<UploadShootForm {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with error message', () => {

    let props = {
        message: 'Error, please try again..',
        hanleFormChange: jest.fn(),
        handleSubmit: jest.fn(),
        title: "TestTitle",
        editor: "TestEditor",
        label: "TestLabel",
        name: "TestName",
        handleTextChange: jest.fn(),
        captureFileEl: jest.fn(),
        handleFileChange: jest.fn()
    }

    let tree = renderer.create(<UploadShootForm {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with no message', () => {

    let props = {
        message: '',
        hanleFormChange: jest.fn(),
        handleSubmit: jest.fn(),
        title: "TestTitle",
        editor: "TestEditor",
        label: "TestLabel",
        name: "TestName",
        handleTextChange: jest.fn(),
        captureFileEl: jest.fn(),
        handleFileChange: jest.fn()
    }

    let tree = renderer.create(<UploadShootForm {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
});