import React from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'

const UserLayout = ({ cartCount }) => {

    return (
        <div className="app-container">

            <Navbar cartCount={cartCount} />

            <main className="main-content">
                <Outlet />
            </main>

            <Footer />

        </div>
    )
}

export default UserLayout