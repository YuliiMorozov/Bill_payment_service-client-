import React, { useEffect, useState } from 'react';
import { get } from '../../API/APIWrapper';
import { MyInvoicesOnModal } from './myInvoices';

interface IInvoiceModal {
    invoices: any
    title: string | number
    closeModal: any
}

function InvoicesModal({ title, closeModal}: IInvoiceModal ) {

    const [invoices, setInvoices] = useState([]);

    async function fetchInvoices() {
      try {
        const response = await get(`/api/service_invoice/1`)
        setInvoices(response.data)
      } catch (e) {
        console.log(e);
      }
    }
  
    useEffect(() => {
      fetchInvoices()
    }, []);

  return (
    <>
        <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"></div>
        <div className="w-[700px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
            <div className="relative w-full h-full max-w-2xl md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">


                    <div className='title'>                
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            { title }
                        </h3>
                        <button onClick={() => closeModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>                
                    </div>
                    

                    <div className='body'>
                        <div className="p-6 space-y-6">                            
                        <table className="min-w-full">

                            <thead className="border-b">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Type service 
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Service tax
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Duty
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Pay
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                            { invoices.map(invoice => <MyInvoicesOnModal invoice={invoice} />) }
                            </tbody>

                        </table>
                        </div>
                    </div>
                    

                    <div className='footer'>
                    <div className="p-6 text-center">
                        <button onClick={() => closeModal(false)} data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Decline</button>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  );
}

export default InvoicesModal;