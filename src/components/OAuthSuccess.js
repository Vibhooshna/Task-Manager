import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OAuthSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('token');

    if (token) {
      localStorage.setItem('token', token);
      navigate('/dashboard'); // change this to your actual dashboard route
    } else {
      alert("Login failed or token missing");
      navigate('/login');
    }
  }, [navigate]);

  return <p>Redirecting...</p>;
};

export default OAuthSuccess;
