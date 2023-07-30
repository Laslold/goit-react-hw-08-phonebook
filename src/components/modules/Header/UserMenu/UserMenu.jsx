import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../../redux/auth/auth-selector';
import s from './usermenu.module.css';
import { NavLink } from 'react-router-dom';
import { logoutAuthThunk } from '../../../../redux/auth/auth-operation';
import { Box, Typography } from '@mui/material';
const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutAuthThunk());
  };
  return (
    <div>
      <Box>
        <Typography
          component="h4"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '200px',
          }}
        >
          <p className={s.link}>{email}</p> |{' '}
          <NavLink className={s.active} onClick={onLogout}>
            Logout
          </NavLink>
        </Typography>
      </Box>
    </div>
  );
};

export default UserMenu;
