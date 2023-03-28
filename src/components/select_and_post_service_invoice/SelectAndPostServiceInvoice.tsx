import React, { useEffect, useState } from 'react';
import { get } from '../../API/APIWrapper';

export default function SelectAndPostServiceInvoice() {

    let [currentAddress, setCurrentAddress] = useState([])

    const [typeService, setTypeService] = useState<[]>([]);

    async function fetchAddressTypeService() {
    const response = await get('api/address')
    setCurrentAddress(response.data)
    // console.log(response.data)
    let services = response.data.map((elem: { id: string; city: string}) => ({
        value: elem.id,
        label: elem.city
    }))
    setCurrentAddress(services)
    }

    useEffect(() => {
        fetchAddressTypeService()
    }, []);

    // const getValue = () => {
    //     return currentAddress ? typeService.find(elem => elem.value === currentAddress) : ''
    // }




  return (
    <div>
      
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose address</label>
        <select id="small" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Choose address</option>
          
          <option 
          value="US">United States</option>


          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>

    </div>
  );
}
