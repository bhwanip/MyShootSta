import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ label, name, placeholder, handleTextChange, value }) => (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input className="form-control" placeholder={placeholder}
            type="text" onChange={handleTextChange} name={name} value={value} />
    </div>

)

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handleTextChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
  };
export default TextInput;