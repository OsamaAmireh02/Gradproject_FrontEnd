import { Scanner } from '@yudiel/react-qr-scanner';
import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const ReadQR = () => {
  const [ifError, setIfError] = useState(false);

  const handleScanResult = (text, result) => {
    handlePostRequest(result.text);
  };

  const handlePostRequest = async (id) => {
    try {
      const endpoint = `/ticket/scan/${id}`;
      const response = await PostMethod1(endpoint);
      window.location.href = `/?readed=true`;
    } catch (error) {
      console.error('Error fetching data:', error);
      setIfError(true);
    }
  };

  const api = axios.create({
    baseURL: 'http://localhost:8080',
  });

  async function PostMethod1(endpoint) {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found. Please authenticate first.');
        return null;
      }
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const response = await api.post(endpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  return (
    <>
      {!ifError ? <><h2 style={{ color: 'white' }}>Scanning...</h2> 
      <div style={{ maxHeight: '500px', maxWidth: '500px' }}>
        <Scanner
          onResult={handleScanResult}
          onError={(error) => setIfError(true)}
        />
      </div>
      </>:
        <><h2 style={{ color: 'white' }}>Ticket not found, please try again.</h2><br/>
        <Button variant="warning" href='/guard/scan'>Scan again</Button></>
      }
    </>
  );
};

export default ReadQR;
