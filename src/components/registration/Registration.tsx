import React, { useState } from "react";
import { IRegistration } from "./interface/IRegistration";
import { ErrorMessage } from "../errors/ErrorMessage";
import { post } from "../../API/APIWrapper"; 
import { AppDispatch } from "../../app/store/store";
import { useDispatch } from "react-redux";
import { Registr } from "../../app/store/asyncThunks/registration/registration";


export function Registration() {

    const dispatch = useDispatch<AppDispatch>()

    let [user, setUser] = useState <IRegistration> ({
        username: '', 
        email: '', 
        password: '', 
        password2: ''
    });
    
    const [error, setError] = useState('');

    async function submitHandler (event: React.FormEvent) {
        event.preventDefault()
        setError('')

        if (user.username.trim().length === 0) {
            setError('Please enter valid info')
            return
        }

        async function HandleSubmit(event: React.FormEvent) {
            event.preventDefault()        
            // await dispatch(Registr({username: username, email: email, password: password, password2: password2}))        
        }

        await post('api/registration', JSON.stringify( user ))
        }        

    function changeHandler (this: any, event: React.ChangeEvent<HTMLInputElement>) {       
        if (event.target.name === "user") {
            setUser({...user, username: event.target.value})
        }
        if (event.target.name === "email") {
            setUser({...user, email: event.target.value})
        }
        if (event.target.name === "password")
        {
            setUser({...user, password: event.target.value})
        }
        if (event.target.name === "password2")
        {
            setUser({...user, password2: event.target.value})
        }    
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
                <h3 className="text-2xl font-bold text-center">Join us</h3>
                <form onSubmit={submitHandler}>
                    <div className="mt-4">
                        <div>
                            <label className="block">Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Username"
                                    value={ user.username }
                                    onChange={ changeHandler }
                                    name="user"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>
                        <div className="mt-4">
                            <label className="block">Email</label>
                                <input 
                                    type="text" 
                                    placeholder="Email"
                                    value={ user.email }
                                    onChange={ changeHandler }
                                    name="email"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>
                        <div className="mt-4">
                            <label className="block">Password</label>
                                <input 
                                    type="password" 
                                    placeholder="Password"
                                    value={ user.password }
                                    onChange={ changeHandler }
                                    name="password"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>
                        <div className="mt-4">
                            <label className="block">Confirm Password</label>
                                <input 
                                    type="password" 
                                    placeholder="Password"
                                    value={ user.password2 }
                                    onChange={ changeHandler }
                                    name="password2"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>
                        <div className="flex">
                            <button type="submit" className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                                Create Account
                            </button>
                        </div>
                        <div className="mt-6 text-grey-dark">
                            Already have an account?
                            <a className="text-blue-600 hover:underline" href="/login">
                                Log in
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>    
    )
}