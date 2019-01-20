import React from "react";
import {Link, IndexLink} from "react-router";

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

export default Header;
    
