import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserStart, fetchUserSuccess, fetchUserError } from '../store/userSlice';
import { RootState } from '../store/store';
import { Button, Typography, Box } from '@mui/material';

const MainPage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.user);

  const fetchUserData = async () => {
    dispatch(fetchUserStart());
    try {
      const response = await fetch('http://localhost:3000/api/fetch-user-data');
      const userData = await response.json();
      dispatch(fetchUserSuccess(userData));
    } catch (err) {
      dispatch(fetchUserError('Failed to fetch user data'));
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
      <Typography variant="h4" gutterBottom>
        Main Page
      </Typography>
      <Button variant="contained" onClick={fetchUserData} sx={{ marginBottom: 2 }}>
        Fetch User Data
      </Button>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      {data && <Typography>User Data: {JSON.stringify(data)}</Typography>}
    </Box>
  );
};

export default MainPage;