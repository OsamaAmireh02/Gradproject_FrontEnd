import React, { useEffect } from 'react'
import AdminProfile from '../components/viewMyProfile/AdminProfile'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'
import axios from 'axios';

function AdminViewProfilePage() {

    return (
        <div style={{
            // paddingTop: '50px',
        }}>
            <NavBar />
            <AdminProfile />
            <Footer />
        </div>
    )
}

export default AdminViewProfilePage
