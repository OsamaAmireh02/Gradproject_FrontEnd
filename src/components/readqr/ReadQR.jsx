import { Scanner } from '@yudiel/react-qr-scanner';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ReadQR = () => {
  const [scannedData, setScannedData] = useState(null);

  // Callback function when QR code is successfully scanned
  const handleScanResult = (text, result) => {
    // Assuming 'result' contains the scanned data (e.g., ticket ID)
    // You can customize this logic based on your specific use case
    setScannedData(result);
  };

  // Function to handle the POST request
  const handlePostRequest = async () => {
    try {
      // Make a POST request to your server endpoint
      const response = await fetch('https://example.com/api/scan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ticketId: scannedData }), // Send the scanned data
      });

      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log('POST request successful');
      } else {
        // Handle error (e.g., show an error message)
        console.error('Error making POST request');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      {/* Display the scanned data */}
      {scannedData && <p>Scanned Data: {scannedData}</p>}

      {/* QR scanner component */}
      <Scanner
        onResult={handleScanResult}
        onError={(error) => console.log(error?.message)}
      />

      {/* Button to trigger the POST request */}
      <Button onClick={handlePostRequest}>Make POST Request</Button>
    </div>
  );
};

export default ReadQR;
