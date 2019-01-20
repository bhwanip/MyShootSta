import React from "react";
import {
    shallow,
    mount
} from 'enzyme';

import UploadShootFormContainer from '../UploadShootFormContainer';

describe('<UploadShootFormContainer/>', () => {
    it('verfies state for change in title field', () => {
        const wrapper = mount( < UploadShootFormContainer / > );
        const initialState = wrapper.state();
        const titleInput = wrapper.find('input[name="title"]');
        titleInput.simulate("change", {
            target: {
                name: "title",
                value: "Changed Title"
            }
        });
        expect(wrapper.state()).toEqual({
            ...initialState,
            title: 'Changed Title',
            message: ''
        });
    })

    it('verfies state for change in editor field', () => {
        const wrapper = mount( < UploadShootFormContainer / > );
        const initialState = wrapper.state();
        const titleInput = wrapper.find('input[name="editor"]');
        titleInput.simulate("change", {
            target: {
                name: "editor",
                value: "Changed Editor"
            }
        });
        expect(wrapper.state()).toEqual({
            ...initialState,
            editor: 'Changed Editor',
            message: ''
        });
    })

    it('verfies form submission sucess', (done) => {
        const mockJsonPromise = Promise.resolve({
            status: 201
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockJsonPromise);
        const wrapper = mount( < UploadShootFormContainer / > );
        const body = {
            title: 'New Title',
            editor: 'New Editor',
            shootVideo: 'shootVideo'
        };
        wrapper.setState({...body});
        const initialState = wrapper.state();
        const form = wrapper.find('form');
        form.simulate('submit', {
            preventDefault: jest.fn()
        })
        expect(global.fetch).toHaveBeenCalledTimes(1);
        process.nextTick(() => {
            expect(wrapper.state()).toEqual({
                ...initialState,
                message: 'Your Video has been uploaded sucessfully',
                'title': '',
                'editor': '',
                'shootVideo': ''
            });

            global.fetch.mockClear();
            done();
        });

    })

    it('verfies form submission failure', (done) => {
        const mockJsonPromise = Promise.resolve({
            status: 500
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockJsonPromise);
        const wrapper = mount( < UploadShootFormContainer / > );
        const body = {
            title: 'New Title',
            editor: 'New Editor',
            shootVideo: 'shootVideo'
        };
        wrapper.setState({...body});
        const initialState = wrapper.state();
        const form = wrapper.find('form');
        form.simulate('submit', {
            preventDefault: jest.fn()
        })
        expect(global.fetch).toHaveBeenCalledTimes(1);
        process.nextTick(() => {
            expect(wrapper.state()).toEqual({
                ...initialState,
                message: 'Error, please try again..',
                'title': '',
                'editor': '',
                'shootVideo': ''
            });

            global.fetch.mockClear();
            done();
        });

    })
});