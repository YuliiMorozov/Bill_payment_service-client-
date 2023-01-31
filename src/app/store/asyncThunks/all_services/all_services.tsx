import { createAsyncThunk } from '@reduxjs/toolkit';
import { get } from '../../../../API/APIWrapper';

export const allServices = createAsyncThunk('login/allServices', async (data: object) => {
  try {
    get('http://127.0.0.1:5000/api/service_invoice/types', JSON.stringify({...data}))
    console.log('Hi text')
  } catch (e) {
    return e;
  }
});