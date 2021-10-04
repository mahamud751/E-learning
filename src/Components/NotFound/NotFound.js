import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../404.gif'

const NotFound = () => {
    return (
        <div>
            <div>
                <img src={img} alt="" />
            </div>
            <Link to="./home">
                <button className="btn-explore mt-5">Back to home page</button>
            </Link>
        </div>


    );
};

export default NotFound;