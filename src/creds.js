const creds = {
    // backendUrl: "/api/", // Default API call end point.
     backendUrl: process.env.REACT_APP_BASE_URL // Local development API end point.
    // backendUrl: 'https://neighborhood.com/api/', // Production API end point.
    // backendUrl: 'https://xx.xx.xx.xx:3001/api/', // Dev Server API end point.
  };
  
  export const url = creds.backendUrl;
  export default creds;
  