import React from "react";
import {Link, IndexLink} from "react-router";
import PropTypes from 'prop-types';

const Header = ({children}) => (
 <div className="container-fluid">
    <div className="row text-centre justify-content-center">
        <nav>
            <IndexLink to = "/" activeClassName = "active">List</IndexLink>
            {" | "}
            <Link to = "upload" activeClassName = "active">Upload</Link>
        </nav>
    </div>
    {children}
 </div>
);

Header.propTypes = {
    children: PropTypes.node
  };

export default Header;
    
