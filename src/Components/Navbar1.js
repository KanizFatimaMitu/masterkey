import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Navbar1 = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <p className="normal-case text-lg"><span className='font-bold'>Shop</span>Cart</p>
                </div>
                <div className="navbar-end">
                    <p><FontAwesomeIcon className='mr-2' icon={faUserCircle} />Sing in</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar1;