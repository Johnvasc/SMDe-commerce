"use client"

import '../Styles/Navbar.Modules.css'
import '../Styles/Pages.css'
import Link from 'next/link'
import { BsSearch } from "react-icons/bs"
import { BsBag } from "react-icons/bs"
import { BsPerson } from "react-icons/bs"
import { useEffect, useState } from "react"

function Navbar(){
    var isToken = true
    const [loginWindow, setWindow] = useState(false)
    return(
        <nav>
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
            {!localStorage.getItem('userToken') && loginWindow && (
                <div id='loginWindow'>
                    <p>Tem uma conta? Faça login!</p>
                    <Link href='/signin'>
                        <button onClick={()=>window.location.href = '/signin'}>Faça login!</button>
                    </Link>
                    <p>Ainda não tem uma conta?</p>
                    <Link href='/signup'>
                        <button onClick={()=>window.location.href = '/signup'}>Cadastre-se!</button>
                    </Link>
                    
                </div>
            )}
            {localStorage.getItem('userToken') && loginWindow && (
                <div id='loginWindow'>
                    <Link href='/profile'>
                        <button>Meu perfil</button>
                    </Link>
                    <Link href='/'>
                        <button onClick={()=>{localStorage.removeItem("userToken");}}>Fazer Logoff</button>
                    </Link>
                </div>
            )}
        </nav>
    )
}
export default Navbar