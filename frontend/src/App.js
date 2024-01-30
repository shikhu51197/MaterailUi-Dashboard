// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Dashboard from "./Components/Dashboard/Dashboard";

const App = () => {
  // const [graphData, setGraphData] = useState([]);

  // useEffect(() => {
  //   // Fetch data from the backend
  //   axios.get('http://localhost:5000/data')
  //     .then(response =>{console.log(response.data) ; setGraphData(response.data)})
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default App;
