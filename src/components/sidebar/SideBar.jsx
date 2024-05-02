import React from 'react'

function SideBar(props) {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style={{backgroundColor: '#303841 '}}>
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline">Admin Dashboard</span>
                        </a>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item">
                                <a href="/admin/users" className="nav-link align-middle px-0" style={{color: 'white'}}>
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Users</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/admin/parkings" className="nav-link align-middle px-0" style={{color: 'white'}}>
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Parkings</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/admin/tickets" className="nav-link align-middle px-0" style={{color: 'white'}}>
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Tickets</span>
                                </a>
                            </li>
                        </ul>
                        <hr />
                    </div>
                </div>
                <div className="col py-3">
                    {props.button}
                    {props.table}
                </div>
            </div>
        </div>
    )
}

export default SideBar
