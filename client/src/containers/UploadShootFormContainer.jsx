import React, { Component } from "react";
import { UploadShootForm } from "../components";

export default class UploadShootFormContainer extends Component {
    handleSubmit = async (event) => {
        event.preventDefault();
        const { title, editor, shootVideo } = this.state;
        let data = new FormData();
        data.append('videoshoot', shootVideo);
        data.append('title', title);
        data.append('editor', editor);
        let response = await fetch('api/videos', {
            method: 'post',
            body: data
        });
        let message = (response.status === 201) ? "Your Video has been uploaded sucessfully" : "Error, please try again..";
        this.setState({
            ...this.state,
            message
        });
        this.clearForm();
    }

    handleTextChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }

    handleFileChange = (event) => {
        const name = event.target.name;
        const file = event.target.files[0];
        this.setState({ [name]: file });
    }

    clearForm = () => {
        this.setState({
            ...this.state,
            'title': '',
            'editor': '',
            'shootVideo': ''
        });
        this.fileInput.value = "";
    }

    hanleFormChange = () => {
            this.setState({
                'message': ''
            });
        }

    captureFileEl = (input) => {
        this.fileInput = input;
    }

    constructor(props) {
        super(props)
        this.state = {
            'message': '',
            'title': '',
            'editor': '',
            'shootVideo': ''
        };
    }

    render() {
        return (
            <UploadShootForm handleSubmit={this.handleSubmit} handleTextChange={this.handleTextChange} handleFileChange={this.handleFileChange} hanleFormChange={this.hanleFormChange} captureFileEl={this.captureFileEl} {...this.state} />
        );
    }
}