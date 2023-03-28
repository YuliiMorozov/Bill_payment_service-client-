import React from 'react'
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'

export function Card() {

    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async (e:any) => {
        e.preventDefault()

        if(!stripe || !elements) {
            return
        }
    }

    return (        
    <>
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form id="payment-form" className="space-y-6" onSubmit={handleSubmit}>
                <h1 className="text-xl font-medium text-gray-900 dark:text-white">Card</h1>
                <label htmlFor="card-element">Card</label>
                    <CardElement id="card-element" />
                <button>Pay</button>                    
            </form>
        </div>
    </>
    );
}