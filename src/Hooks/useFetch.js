import { useState, useEffect } from 'react';
import { get, post } from '../Utils/api';

const useFetch = (url) => {
  const [dashboardData, setDashboardData] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get(url); 
        setDashboardData(response.data); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchData(); 
  }, [url]);

  return { dashboardData, loading, error };
};

export default useFetch;
