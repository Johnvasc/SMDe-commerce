"use client"
import { useState } from "react"
import "../Styles/Signup.Modules.css"


export default function page(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function Signin(){
        const data = {login: username, password: password}
        console.log(data)
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
        try{
            const response = await fetch('http://localhost:8080/signin', options)
            if(response.status===200){
                const tokenPackage = await response.json();
                console.log(tokenPackage)
                localStorage.setItem("userToken", tokenPackage.token);
            }
        }catch(error){
            console.error('Erro:', error);
        }

    }

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
                <button onClick={()=>{Signin()}}>Login</button>
            </section>
        </section>
    )
}