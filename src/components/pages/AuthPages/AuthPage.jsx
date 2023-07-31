import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginForm from 'components/modules/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import UseAuth from '../../../shared/hooks/useAuth';
import { loginAuthThunk, signupAuthThunk } from 'redux/auth/auth-operation';
import RegisterForm from 'components/modules/RegisterForm/RegisterForm';
import { useState } from 'react';

const defaultTheme = createTheme();

const AuthPage = () => {
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();
  const onLogin = data => {
    dispatch(loginAuthThunk(data));
  };
  const onSignup = data => {
    dispatch(signupAuthThunk(data));
  };

  const isLogin = UseAuth();

  if (isLogin) {
    return <Navigate to="/home" />;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: t =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            {toggle ? (
              <>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>

                <LoginForm onSubmit={onLogin} />
                <Grid container sx={{ justifyContent: 'center' }}>
                  <Grid item>
                    <Link
                      href="#"
                      variant="body2"
                      onClick={() => setToggle(!toggle)}
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </>
            ) : (
              <>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <RegisterForm onSubmit={onSignup} />
                <Grid container sx={{ textAlign: 'center' }}>
                  <Grid item>
                    <Link
                      href="#"
                      variant="body2"
                      onClick={() => setToggle(!toggle)}
                    >
                      {'Registered user? To come in'}
                    </Link>
                  </Grid>
                </Grid>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default AuthPage;
