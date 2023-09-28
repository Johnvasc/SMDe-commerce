"use client";
import { useEffect, useState } from "react"
import "../Styles/Signup.Modules.css"

export default function page(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUser] = useState('')
    const [cidade, setCidade] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [pass, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [errorMessege, setErrorMessege] = useState('')
    function validateForm(campo){
        if(campo.length < 4 || campo.length > 20){
            setErrorMessege(`verifique os campos de indentificação!`)
            console.log(campo)
            return false
        }
        return true
    }
    function validatePass(password, passowrdConfirmation){
        if(password == passowrdConfirmation && password.length > 4 && passowrdConfirmation.length > 4) return true
        setErrorMessege('As senhas estão diferentes!')
        return false
    }
    return(
        <section>
            <div id="signupForm">
                <h1>Cadastrar-se</h1>
                <input type="text" placeholder="Nome* (entre 4-20)" name="Nome" value={nome} onChange={(e)=>{
                    setNome(e.target.value)
                }}/>
                <input type="text" placeholder="Username* (entre 4-20)" name="Username" value={username} onChange={(e)=>{
                    setUser(e.target.value)
                }} />
                <input type="email" placeholder="E-mail*" name="E-mail" value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
                <div id="addressInputs">
                    <input type="text" placeholder="Cidade*" value={cidade} onChange={(e)=>{
                        setCidade(e.target.value)
                    }}/>
                    <input type="text" placeholder="Rua*" value={rua} onChange={(e)=>{
                        setRua(e.target.value)
                    }}/>
                    <input type="text" placeholder="Número*" value={numero} onChange={(e)=>{
                        setNumero(e.target.value)
                    }}/>
                </div>
                <input type="password" placeholder="Senha*" value={pass} onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                <input type="password" placeholder="Confirmar Senha*" value={confirmPass} onChange={(e)=>{
                        setConfirmPass(e.target.value)
                    }}/>
                <div>
                    <button onClick={()=>{
                        setErrorMessege('')
                        if(!validateForm(nome) || !validateForm(username) || !validateForm(email)) return false
                        if(!validateForm(cidade) || !validateForm(rua) || !validateForm(numero)) return false
                        if(!validatePass(pass, confirmPass)) return false
                        setErrorMessege('deu certo!')

                    }}>Cadastrar</button>
                </div>
                <div id="errorField">
                    <p>{errorMessege}</p>
                </div>
            </div>
        </section>
    )
}