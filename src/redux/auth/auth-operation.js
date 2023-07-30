import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrent, login, logout, signup } from 'shared/auth-api';

export const signupAuthThunk = createAsyncThunk(
  'users/signupAuthThunk',
  async (data, thunkAPI) => {
    try {
      const result = await signup(data);

      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginAuthThunk = createAsyncThunk(
  'users/loginAuthThunk',
  async (data, thunkAPI) => {
    try {
      const result = await login(data);

      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const logoutAuthThunk = createAsyncThunk(
  'users/logoutAuthThunk',
  async (_, thunkAPI) => {
    try {
      const result = await logout();

      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const currentAuthThunk = createAsyncThunk(
  'users/currentAuthThunk',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();

      const result = await getCurrent(auth.token);

      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
