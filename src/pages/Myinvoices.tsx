import React, { useEffect, useState } from 'react'
import { MyInvoices } from '../components/my_invoices/myInvoices';
import { get } from '../API/APIWrapper';
import { IMyInvoices } from '../components/my_invoices/interface/IMyInvoices';

import { useSearchParams } from 'react-router-dom';

export function MyInvoicePage() {

  // const[searchParams, setSearchParams] = useSearchParams();
  // const[query, setQuery] = useState(searchParams.get(''));



  const [invoices, setInvoices] = useState([]);

  async function fetchInvoices() {
    try {
      const response = await get(`/api/service_invoice/3`)
      setInvoices(response.data)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchInvoices()
  }, []);

    return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Date
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Current value 
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Duty 
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Previous value 
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Service rule id 
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Type service id 
                    </th>
                    {/* <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Payment
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                { invoices.map(invoice => <MyInvoices invoice={invoice} />) }
                {/* ERROR!!!, have not KEY */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}