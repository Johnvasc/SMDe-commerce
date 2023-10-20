"use client"

import '../Styles/Navbar.Modules.css'
import '../Styles/Pages.css'
import Link from 'next/link'
import { BsSearch } from "react-icons/bs"
import { BsBag } from "react-icons/bs"
import { BsPerson } from "react-icons/bs"
import { useEffect, useState } from "react"

function Navbar(){
    var isToken
    const [loginWindow, setWindow] = useState(false)
    return(
        <nav onLoad={()=>{
            if(localStorage.getItem("userToken")==null) isToken = false
            else isToken = true            
        }}>
            <Link href="/">
                <h2>SMDe-commerce</h2>
            </Link>
            <div>
                <input type="text" name="" id=""></input>
                <button>
                    <BsSearch className='navIcon'/>
                </button>
            </div>
            <button className="mallButton">
                <Link href="/carrinho">
                    <BsBag className='navIcon'/>
                </Link>
            </button>
            <button className='mallButton' onClick={()=>setWindow(!loginWindow)}>
                <BsPerson className='navIcon'/>
            </button>
            {loginWindow && !isToken && (
                <div id='loginWindow'>
                    <p>Tem um conta?</p>
                    <Link href='/signin'>
                        <button onClick={()=>window.location.href = '/signin'}>Faça login!</button>
                    </Link>
                    <p>Ainda não tem uma conta?</p>
                    <Link href='/signup'>
                        <button onClick={()=>window.location.href = '/signup'}>Cadastre-se!</button>
                    </Link>
                    
                </div>
            )}
            {loginWindow && isToken && (
                <div id='loginWindow'>
                    <Link href='/signin'>
                        <button onClick={()=>window.location.href = '/profile'}>Meu Perfil</button>
                    </Link>
                    <Link href='/signup'>
                        <button onClick={()=>window.location.href = '/signup'}>Sair</button>
                    </Link>
                </div>
            )}
        </nav>
    )
}
export default Navbar