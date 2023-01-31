import React from 'react';
import { Registration } from './components/registration/Registration';
import {  Routes,  Route } from "react-router-dom";
import { AddressesPage } from './pages/Addresses';
import { Navigation } from './components/navigation/Navigation';
import { LoginPage } from './pages/Login';
import { ErrorPage } from './components/error/Error';
import { Counter } from './app/store/counter/Counter';
import { MyInvoicePage } from './pages/Myinvoices';
import { Logout } from './components/logout/LogOut';
import { PostServiceInvoice } from './components/post_service_invoice/PostServiceInvoice';


function App() {
  return (
    <>
      <Navigation />
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/addresses" element={<AddressesPage />} />
          <Route path="/myinvoices" element={<MyInvoicePage />} />          
          <Route path="/services" element={<PostServiceInvoice />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/test" element={<Counter />} />
        </Routes>
    </>    
  );
};

export default App;