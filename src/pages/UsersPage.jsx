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
                    <Button className='mb-3 ms-3' href='/admin/addUser' variant='secondary'>Add User</Button>

                </>}
            />
        </div>
    )
}

export default UsersPage
