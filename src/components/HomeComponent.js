import React from "react";
import {Link} from "react-router-dom";

const HomeComponent = () =>
    <div>
        <h1>Home</h1>
        <div className="list-group">
            <Link className="list-group-item" to='/editor'>
                Course Editor
            </Link>

            <Link className="list-group-item" to='/table/courses'>
                Course List
            </Link>

            <Link className="list-group-item" to='/login'>
                Login
            </Link>
        </div>
    </div>

export default HomeComponent