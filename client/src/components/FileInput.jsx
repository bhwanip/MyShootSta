import React from 'react';

const FileInput = ({label, name, handleFileChange, captureFileEl}) => (
    <div className="form-group">
        <label htmlFor={name}>{label}</label> <br />
        <input type="file" name={name} onChange={handleFileChange} ref={captureFileEl} />
    </div>

)

export default FileInput;