import React, { useEffect, useState } from "react";
import Select from 'react-select'
import { get, post } from "../../API/APIWrapper"; 
import { ITypeService } from "./interface/ITypeService";

export function PostServiceInvoice() {

    let [currentTypeService, setCurrentTypeService] = useState<string>('1')

    let [invoice, setInvoice] = useState ({
        cur_value: 0, 
    });

    const [typeService, setTypeService] = useState<ITypeService[]>([]);

    async function fetchTypes() { 
    const response = await get('api/service_invoice/types')  
    let services = response.data.map((elem: { id: string; name_service: string; }) => ({
        value: elem.id,
        label: elem.name_service
    }))
    setTypeService(services)
    }

    useEffect(() => {
        fetchTypes()
      }, []);

    async function submitHandler (event: React.FormEvent) {
        event.preventDefault()
        // setError('')

        await post('/api/service_invoice/1', JSON.stringify( {...invoice, type_service_id: currentTypeService} ))
        }

    const getValue = () => {
        return currentTypeService ? typeService.find(elem => elem.value === currentTypeService) : ''
    }

    const onChange = (newValue:any) => {
        setCurrentTypeService(newValue.value)
    }

    function changeHandler (this: any, event: React.ChangeEvent<HTMLInputElement>) {       
        if (event.target.name === "cur_value") {
            setInvoice({...invoice, cur_value: Number(event.target.value)})
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
                <h3 className="text-2xl font-bold text-center">Submit current information</h3>
                <form onSubmit={submitHandler}>
                    <div className="mt-4">
                        <div className="mt-4">
                        <label className="block">Service</label>

                            <Select 
                                onChange={ onChange }
                                value={ getValue() } 
                                options={typeService} 
                                name="name_service"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block">Value</label>
                                <input 
                                    min="0"
                                    type="number" 
                                    placeholder="cur_value"
                                    value={ invoice.cur_value }
                                    onChange={ changeHandler }
                                    name="cur_value"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>
                        <div className="flex">
                            <button type="submit" className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>    
    )
}