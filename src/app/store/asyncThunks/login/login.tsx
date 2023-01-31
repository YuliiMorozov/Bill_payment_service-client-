import { createAsyncThunk } from '@reduxjs/toolkit';
import { post } from '../../../../API/APIWrapper';

export const singIn = createAsyncThunk('login/singIn', async (data: object) => {
  try {
    post('http://127.0.0.1:5000/api/login', JSON.stringify({...data}))
    console.log('Hi text')
  } catch (e) {
    return e;
  }
});