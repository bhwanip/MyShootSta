import React from "react";

const Shoot = ({url, title, editor}) => (
<div className="col-md-3">
        <div className = "embed-responsive embed-responsive-16by9">
            <video controls>
                <source src={url} type="video/mp4" />
                Please upgrade your browser
            </video>
        </div>
    <div className = "videoInfo">
        <h4>
            <button type="button" className="link-button">{title}</button>
        </h4>
        <p>Editor : {editor}</p>
    </div>
</div>
);

export default Shoot;

