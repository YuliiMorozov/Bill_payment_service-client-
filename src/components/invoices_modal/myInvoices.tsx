import React from 'react'
import { IMyInvoices } from '../my_invoices/interface/IMyInvoices'


interface MyInvoicesProps {
    invoice: IMyInvoices,
}

export function MyInvoicesOnModal({invoice}: MyInvoicesProps) {

    return (
        <tr className="border-b">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {invoice.type_service_id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {invoice.service_rule_id}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {invoice.duty}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">

            <button 
            onClick={ () => window.open("https://privat24.ua/", "_blank") } 
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Pay now
            </button>
            
            </td>
        </tr>
    )
}