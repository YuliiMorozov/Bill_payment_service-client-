import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAddressStore } from './interface/IAddressesStore';
import { getAddresses } from '../asyncThunks/addresses/getAddresses';
import { IAddress } from '../../../components/address/interface/IAddress';
import { store } from '../store';


const initialState: IAddressStore = {
  loading: 'idle',
  addresses: [],
};

export const addressesSlice = createSlice({
  name: 'addresses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAddresses.pending, (state) => {
        state.loading = 'pending';
        console.log(state.loading)        
      })
      .addCase(getAddresses.fulfilled, (state, action: PayloadAction<IAddress[]>) => {
        state.loading = 'fulfilled';
        console.log(state.loading)
        state.addresses = [...action.payload];
      })
      .addCase(getAddresses.rejected, (state) => {
        state.loading = 'rejected';
        console.log(state.loading)        
      })
  },
});

export const addressesStore = (state: any): IAddressStore => state.addresses;

// export const { setTitleAppBar, editIsReading } = addressesSlice.actions;

export default addressesSlice.reducer;