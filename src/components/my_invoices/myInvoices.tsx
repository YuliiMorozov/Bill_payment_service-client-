import React from 'react'
import { IMyInvoices } from './interface/IMyInvoices'
import { IMyServiceRule } from './interface/IMyServiceRule'

interface MyInvoicesProps {
    invoice: IMyInvoices,
    // rule: IMyServiceRule
}

export function MyInvoices({invoice}: MyInvoicesProps) {

    return (
        <tr className="border-b">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {invoice.date}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {invoice.cur_value}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {invoice.duty}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {invoice.prv_value}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {invoice.service_rule_id}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {invoice.type_service_id}
            </td>
        </tr>
    )
}