import React, { useState } from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"


const Login = ( { updateUser } ) => {

    const history = useHistory()

    const [ user, setUser ] = useState({
       
        email: "",
        password: ""
      

    })


const handleChange = e => {
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })
}

const login = () => {
    axios.post("http://localhost:9001/login", user)
    .then(res => 
        {alert(res.data.message)
    updateUser(res.data.user)
    history.push("/")
})
}


    return (
        <div clasaName="login">
            
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={ handleChange } placeholder="Enter Your Email"></input>
            <input type="password" name="password" value={user.password} onChange={ handleChange } placeholder="Enter Your Password"></input>
            <input type="button" onClick={login}>Login</input>
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
        </div>
    )
}


export default Login

