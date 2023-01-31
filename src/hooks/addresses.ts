import { useEffect } from "react";
import { getAddresses } from "../app/store/asyncThunks/addresses/getAddresses";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../app/store/store";
import { addressesStore } from '../app/store/addresses/addressesSlice'

export function useAddresses() {

  const dispatch = useDispatch<AppDispatch>()

  const {addresses} = useSelector(addressesStore)

  async function fetchAddress() {

    await dispatch(getAddresses()) 
    
  }
  useEffect(() => {
    fetchAddress()      
  }, [])
  return { addresses }
}