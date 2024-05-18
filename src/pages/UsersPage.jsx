import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import NavBar from '../components/navbar/NavBar'
import UserTable from '../components/userTable/UserTable'
import { Button } from 'react-bootstrap'


function UsersPage() {
    return (
        <div style={{
            // paddingTop: '50px'
        }}>
            <NavBar />
            <SideBar
                table={<UserTable />}
                button={<><Button className='mb-3' href='/admin/deletedUsers' variant='warning'>View Deleted Users</Button>
                    <Button className='mb-3 ms-3' href='/admin/addUser' variant='secondary'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" className='me-1'><g fill="#fff">
                        <path d="M1 14s-1 0-1-1s1-4 6-4s6 3 6 4s-1 1-1 1zm5-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></path>
                        <path 
                        fillRule="evenodd" 
                        d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5">
                            </path></g></svg>
                        Add User</Button>
                </>}
                page="users"
            />
        </div>
    )
}

export default UsersPage
