import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import NavBar from '../components/navbar/NavBar'
import { Button } from 'react-bootstrap'
import DeletedUserTable from '../components/userTable/DeletedUsersTable'


function DeletedUsersPage() {
    return (
        <div>
            <NavBar />
            <SideBar
                table={<DeletedUserTable />}
                button={<>
                    <Button className='mb-3' href='/admin/users' variant='warning'>View Active Users</Button>
                </>}
            />
        </div>
    )
}

export default DeletedUsersPage
