import React from 'react';

const TextInput = ({ label, name, placeholder, handleTextChange, value }) => (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input className="form-control" placeholder={placeholder}
            type="text" onChange={handleTextChange} name={name} value={value} />
    </div>

)

export default TextInput;