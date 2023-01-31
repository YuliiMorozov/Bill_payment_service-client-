import { createAsyncThunk } from '@reduxjs/toolkit';
import { get } from '../../../../API/APIWrapper';

export const getAddresses = createAsyncThunk('addresses/getAddresses', async () => {
  try {
    const response = await get('/api/address')
    return response.data
  } catch (e) {
    console.log(e);
  }
});