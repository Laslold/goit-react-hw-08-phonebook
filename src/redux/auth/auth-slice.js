import {
  loginAuthThunk,
  signupAuthThunk,
  logoutAuthThunk,
  currentAuthThunk,
} from './auth-operation';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  users: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const authSlisce = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(signupAuthThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupAuthThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
      })
      .addCase(signupAuthThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(loginAuthThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAuthThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.isLogin = true;
        state.users = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginAuthThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(logoutAuthThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutAuthThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.isLogin = false;
        state.users = {};
        state.token = '';
      })

      .addCase(logoutAuthThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(currentAuthThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(currentAuthThunk.fulfilled, (state, { payload }) => {
        const { name, email } = payload;

        state.loading = false;
        state.isLogin = true;
        state.users.name = name;
        state.users.email = email;
      })
      .addCase(currentAuthThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});
export default authSlisce.reducer;
