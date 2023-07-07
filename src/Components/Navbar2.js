import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Navbar2 = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <p className="normal-case text-lg bg-warning p-4 rounded-full"><FontAwesomeIcon className='mr-2' icon={ faLocationDot} />dhaka, 1212</p>
            </div>
            <div className="navbar-end">
                <input type="text" placeholder="Search" className="input input-bordered w-40 lg:w-80" />
                <button className="btn btn-ghost btn-circle ml-[-40px]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>

            </div>
        </div>
    );
};

export default Navbar2;