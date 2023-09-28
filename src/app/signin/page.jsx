"use client"
import { useState } from "react"
import "../Styles/Signup.Modules.css"


export default function page(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return(
        <section className="centralize">
            <section id="signupForm">
                <h1>Entre</h1>
                <input type="text" placeholder="Nome de usuário" value={username} onChange={(e)=>{
                    setUsername(e.target.value)
                }}/>
                <input type="password" placeholder="Senha" onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
                <button>Login</button>
            </section>
        </section>
    )
}