import React from 'react';

import PropTypes from 'prop-types';

const FileInput = ({label, name, handleFileChange, captureFileEl}) => (
    <div className="form-group">
        <label htmlFor={name}>{label}</label> <br />
        <input type="file" name={name} onChange={handleFileChange} ref={captureFileEl} />
    </div>

)

FileInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handleFileChange: PropTypes.func.isRequired,
    captureFileEl: PropTypes.func.isRequired
  };

export default FileInput;