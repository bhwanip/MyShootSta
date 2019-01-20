import React from 'react';
import TextInput from './TextInput';
import FileInput from './FileInput';

const UploadShootForm = (props) => (
    <div className="container">
        <div className=".col-md-offset-4 media-list">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h2 className="panel-title text-center">
                        Upload Video
                    </h2>
                </div>
                <div className="panel-body">
                    {(!!props.message) ? (<div className="alert alert-success">{props.message}</div>) : null}
                    <form onChange={props.hanleFormChange} onSubmit={props.handleSubmit} encType="multipart/form-data">
                    
                    <TextInput label="Title" placeholder="Enter the title..." name="title" value={props.title} {...props}/>
                    <TextInput label="Editor Name" placeholder="Enter the Editor Name..." name="editor" value={props.editor}  {...props}/>
                    <FileInput label="Upload Your Video..." name="shootVideo" {...props}/>
                    
                    <button className="btn btn-primary btn-lg" type="submit" >
                            Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
)

export default UploadShootForm;