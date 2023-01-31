import React, { useState } from 'react'
import { IAddress } from './interface/IAddress'
import InvoicesModal from '../invoices_modal/InvoicesModal'

interface AddressProps {
    address: IAddress
}

export function Address({address}: AddressProps) {

  const [openModal, setOpenModal] = useState(false)

    return (
      <tr className="border-b">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {address.id}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          { address.country }
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          { address.city }
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          { address.street }
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          { address.house_number }
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          { address.flat_number }
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {openModal && <InvoicesModal 
                          title={ `${address.street} str. ${address.house_number}, flat #${address.flat_number}` } 
                          invoices={ 1 } 
                          closeModal={setOpenModal}/>}
          <button
          onClick={() => {setOpenModal(true)}}
          data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            Get invoices
          </button>        
        </td>
      </tr>
    )
}