export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    // Check if the token is valid (e.g., not expired)
    // You can use libraries like `jwt-decode` to decode the token.
    return !!token; // Return true if authenticated, false otherwise
  };