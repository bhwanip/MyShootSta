import React from "react";
import Shoot from "./Shoot"
import PropTypes from 'prop-types';

const ShootList = ({ videos }) => (
    <div>
        <div className="row">
            {
                videos.map((video, index) =>
                    <Shoot key={index} {...video} />
                )
            }
        </div>
        <hr />
    </div>
);

export default ShootList;