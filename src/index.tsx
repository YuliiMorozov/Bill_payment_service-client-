import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'


import { store } from './app/store/store'
import { Provider } from 'react-redux'


// const {publishableKey} = await fetch('/config').then(r => r.json())
const stripePromise = loadStripe('pk_test_51MapD8IdrWSt1afyTHMkCvM3AiQtVRJcNT4yDGn3r2ZJuuQYVtkEmWRhgOwJNYt3yexYGBtDD28LoZSXRSPMwj5P00frQCbMDO')
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </Provider>
  </BrowserRouter>,
)