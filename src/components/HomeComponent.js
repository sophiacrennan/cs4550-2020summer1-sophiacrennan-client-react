import React from "react";
import {Link} from "react-router-dom";

const HomeComponent = () =>
    <div>
        <h1>Home</h1>
        <div className="list-group">

            <Link className="list-group-item" to='/login'>
                Login
            </Link>

            <Link className="list-group-item" to='/signup'>
                Sign Up
            </Link>

            <Link className="list-group-item" to='/profile'>
                Profile
            </Link>

            <Link className="list-group-item" to='/table/courses'>
                Course List
            </Link>
            
        </div>
    </div>

export default HomeComponent