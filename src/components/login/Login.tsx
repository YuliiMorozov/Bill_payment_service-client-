import React, { useState } from 'react'
import { ILogin } from './interface/ILogin'
import { useDispatch } from 'react-redux';
import { singIn } from '../../app/store/asyncThunks/login/login';
import { AppDispatch } from '../../app/store/store';

const LoginData: ILogin = {
    email: '',
    password: ''
}

export function Login() {

    const dispatch = useDispatch<AppDispatch>()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [navigate, setNavigate] = useState(false);

    async function HandleSubmit(event: React.FormEvent) {
        event.preventDefault()        
        await dispatch(singIn({email: email, password: password}))        
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        switch (event.target.name) {
            case 'email':
              setEmail(event.target.value)
              break;
            case 'password':
              setPassword(event.target.value)
              break;            
            default:
              console.log('error');
          }
    }

    return (
        <section className="h-screen">
          <div className="px-6 h-full text-gray-800">
            <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
              <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              </div>
              <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                <form onSubmit={HandleSubmit}>
                  <div className="mb-6">
                    <input className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      type="text"
                        value={ email }
                        onChange={ changeHandler }
                        name="email"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="password"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      value={ password }
                      onChange={ changeHandler }
                      name="password"
                      placeholder="Password"
                    />
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <div className="form-group form-check">
                    </div>
                    <a href="#!" className="text-gray-800">Forgot password?</a>
                    {/* new component if forgot pass */}
                  </div>
                  <div className="text-center lg:text-left">
                    <button
                      type="submit"
                      className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                      Login
                    </button>
                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                      Don't have an account?
                      <a
                        href="/registration"
                        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">
                        Register
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
    )
}