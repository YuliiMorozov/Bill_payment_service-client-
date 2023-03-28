import React from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { IdealBankElement } from '@stripe/react-stripe-js';
import { get } from '../API/APIWrapper';


export function TestStripe() {

    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async (e:any) => {
        e.preventDefault()

        // check stripe elements
        if(!stripe || !elements) {
            return
        }

        const cardElement = elements?.getElement(CardElement)
        console.log('card', cardElement)
        console.log('stripe', stripe)

        const exe = fetch("http://127.0.0.1:5000/api/stripe_test")
        .then((result) => { return result.json(); })
        .then((data) => {
            // Initialize Stripe.js
            console.log(data.publicKey);
          });
    }



  return (
    <div>


      <h3>Payment Form</h3>
      <br/>
        <form onSubmit={handleSubmit}>
            <IdealBankElement />
            <CardElement/>
            <button>Pay</button>
        </form>
      

    </div>
  );
}