import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginPage } from '../../pages/Login';


export function Navigation() {

    const pages = ['Addresses', 'My invoices', 'Services', 'About', 'Log out']
    const navLinks = pages.map(
        page => {
            return (
                <Link to={'/' + page.toLowerCase().split(' ').join('')}>
                    {page}
                </Link>
                )
        }
    );

    if (localStorage.getItem('token')) {
        return (        
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link to="/" className="flex items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLgCXB9WuCT8ijkt_JSG_CcvKK_FXq774TiA&usqp=CAU" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo"/>
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Services & Invoices</span>
                    </Link>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {navLinks}
                        </ul>
                    </div>                    
                </div>        
            </nav>
        )
    } else {
        return(
            <LoginPage />
        )    
    }    
}