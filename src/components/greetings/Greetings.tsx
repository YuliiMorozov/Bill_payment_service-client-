import React, { useEffect, useState } from "react";
import { IGreetings } from "./interface/IGreetings";
import { get } from "../../API/APIWrapper";

export function Greetings() {

    const [user, setUser] = useState();

    async function fetchUser() {      
        const response = await get('api/home')
        setUser(response.data)
      
    }

    fetchUser()
  
    useEffect(() => {
      fetchUser()
    }, []);
    
    return (
        <h1>Hello, {user}</h1>
    )
}