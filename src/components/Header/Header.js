import React from 'react'
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar bg-body-success header" style={{ backgroundColor: 'green', }}>
            <div className="container-fluid">
                <h3 style={{ color: 'white' }}>Team Management</h3>
            </div>
        </nav>
    )
}

export default Header