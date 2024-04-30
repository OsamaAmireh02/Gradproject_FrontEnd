import React, { useEffect } from "react";
import axios from "axios";

const GetEmailData = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');

    if (token && email) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Set the token in the header
          "Content-Type": "application/json", // Set the content type
        },
      };

      const data = { email }; // Create the data object with email

      // Example: Replace with your actual API endpoint
      axios
        .post("http://localhost:8080/getByEmail" , data, config)
        .then((response) => {
          console.log("Data retrieved:", response.data);
          // Handle the retrieved data as needed
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          // Handle errors
        });
    }
  }, []);

  return <div>Your component content here</div>;
};

export default GetEmailData;
