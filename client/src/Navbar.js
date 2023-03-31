import React from 'react'
import "./navbar.css"
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav>
                <h1>Logo</h1>
                <div className='navbar'>
                    <Link to="/signUp">signUp</Link>

                    <Link to="/login">Login</Link>

                    <Link to="/Purchase Book">Purchase a Book</Link>

                    <Link to="/Cart">Cart</Link>
                </div>

            </nav>

            <Outlet />
        </>
    )
}

export default Navbar