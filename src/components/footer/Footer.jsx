import React from "react"

const Footer = () => <footer className="footer font-small blue pt-4">

    <div className='  text-center p-3' style={{
        backgroundColor: '#CFD2CF'
    }}>
        &copy; {new Date().getFullYear()}
        : JUPark
    </div>

</footer>

export default Footer