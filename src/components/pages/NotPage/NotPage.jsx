import { Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const NotPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/login');
  }, [navigate]);
  return (
    <div>
      {' '}
      <Typography component="h1" variant="h5">
        Not pages
      </Typography>
    </div>
  );
};

export default NotPage;
