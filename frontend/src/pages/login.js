import React, {useState, useEffect} from "react";
import Login from "./Login.jsx";  //import UI component

const LoginContainer = ()=>{

    const [user, setUser] = useState(null);

    const handleLogin = ()=>{

    }

    useEffect (()=>{
        const storedUser = localStorage.getItem('user')

        if(storedUser){
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
        }
    }, [])

    return <Login/>
}

export default LoginContainer;


