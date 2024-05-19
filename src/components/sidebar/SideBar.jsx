import React from 'react'
import { Container } from 'react-bootstrap';

function SideBar(props) {

    const page = props.page;
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style={{ backgroundColor: '#303841 ' }}>
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline">Admin Dashboard</span>
                        </a>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            {page === "users" ? 
                            <Container fluid style={{backgroundColor:'#FFC107', borderRadius:'5px'}}>
                            <li className="nav-item">
                                <a href="/admin/users" className="nav-link align-middle px-0" style={{ color: '#111' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="#111" d="M3 14s-1 0-1-1s1-4 6-4s6 3 6 4s-1 1-1 1zm5-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6" /></svg>
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline" style={{textDecorationLine:'underline'}}><strong>Users</strong></span>
                                </a>
                            </li> 
                            </Container>:
                                <li className="nav-item">
                                    <a href="/admin/users" className="nav-link align-middle px-0" style={{ color: 'white' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="#ffffff" d="M3 14s-1 0-1-1s1-4 6-4s6 3 6 4s-1 1-1 1zm5-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6" /></svg>
                                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Users</span>
                                    </a>
                                </li>}
                            {page === "parkings" ? 
                            <Container fluid style={{backgroundColor:'#FFC107', borderRadius:'5px'}}>
                            <li className="nav-item">
                                <a href="/admin/parkings" className="nav-link align-middle px-0" style={{ color: '#111' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><g fill="#111"><path d="M8.27 8.074c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97z" /><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.5 4.002h2.962C10.045 4.002 11 5.104 11 6.586c0 1.494-.967 2.578-2.55 2.578H6.784V12H5.5z" /></g></svg>
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline" style={{textDecorationLine:'underline'}}><strong>Parkings</strong></span>
                                </a>
                            </li>
                            </Container> :
                                <li className="nav-item">
                                    <a href="/admin/parkings" className="nav-link align-middle px-0" style={{ color: 'white' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><g fill="#ffffff"><path d="M8.27 8.074c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97z" /><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.5 4.002h2.962C10.045 4.002 11 5.104 11 6.586c0 1.494-.967 2.578-2.55 2.578H6.784V12H5.5z" /></g></svg>
                                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Parkings</span>
                                    </a>
                                </li>}
                            {page === "tickets" ? 
                            <Container fluid style={{backgroundColor:'#FFC107', borderRadius:'5px'}}>
                            <li className="nav-item">
                                <a href="/admin/tickets" className="nav-link align-middle px-0" style={{ color: '#111' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="#111" d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5a1.5 1.5 0 1 1 0 3a.5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5a1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3z"/></svg>
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline" style={{textDecorationLine:'underline'}}><strong>Tickets</strong></span>
                                </a>
                            </li> 
                            </Container>:
                                <li className="nav-item">
                                    <a href="/admin/tickets" className="nav-link align-middle px-0" style={{ color: 'white' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="#ffffff" d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5a1.5 1.5 0 1 1 0 3a.5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5a1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3z"/></svg>
                                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Tickets</span>
                                    </a>
                                </li>}
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
