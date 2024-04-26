import React, { useState, useEffect } from 'react';
import makeAuthenticatedRequest from './Api';
import { Table } from 'react-bootstrap';

function UserTable() {
    const [responseData, setResponseData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await makeAuthenticatedRequest('/user/all');
            setResponseData(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return null; // Render loading state or spinner
    }

    return (
        <Table striped>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Data Of Birth</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
            {responseData.map(user => <tr>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.DOB}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.userRole}</td>
                </tr>
      )}
                
            </tbody>
        </Table>
    );
}

export default UserTable;
