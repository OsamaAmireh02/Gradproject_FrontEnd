import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Login from '../components/login/Login'
import Footer from '../components/footer/Footer'


function LoginPage() {
    return (
        <div style={{
            // paddingTop: '50px',
        }}>
            <NavBar />
            <Login />
            <footer className="footer font-small blue pt-4 fixed-bottom">
                <div className='  text-center p-3' style={{
                    backgroundColor: '#76885B'
                }}>
                    &copy; {new Date().getFullYear()}
                    : JUPark
                </div>

            </footer>
        </div>
    )
}

export default LoginPage
