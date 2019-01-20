import React from "react";
import PropTypes from 'prop-types';

const Shoot = ({ url, title, editor }) => (
    <div className="col-md-3">
        <div className="embed-responsive embed-responsive-16by9">
            <video controls>
                <source src={url} type="video/mp4" />
                Please upgrade your browser
            </video>
        </div>
        <div className="videoInfo">
            <h4>
                <button type="button" className="link-button">{title}</button>
            </h4>
            <p>Editor : {editor}</p>
        </div>
    </div>
);

Shoot.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    editor: PropTypes.string.isRequired,
};

export default Shoot;

