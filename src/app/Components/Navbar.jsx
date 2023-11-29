"use client"

import '../Styles/Navbar.Modules.css'
import '../Styles/Pages.css'
import Link from 'next/link'
import { BsSearch } from "react-icons/bs"
import { BsBag } from "react-icons/bs"
import { BsPerson } from "react-icons/bs"
import { BsBriefcase } from "react-icons/bs"
import { useEffect, useState } from "react"

function Navbar(){
    const token = localStorage.getItem('token')
    const [search, setSearch] = useState()
    const [loginWindow, setWindow] = useState(false)
    const [admLoginWindow, setAdmWindow] = useState(false)
    const [isAdm, setIsAdm] = useState(false)

    return(
        <nav id='super-nav'>
            <Link href="/">
                <h2>SMDe-commerce</h2>
            </Link>
            <div>
                <input type="text" name="" value={search} onChange={(e)=>{setSearch(e.target.value)}}></input>
                <button onClick={()=>{
                    localStorage.setItem('searchKey', `${search}`)
                    window.location.href=`/search`}}>
                    <BsSearch className='navIcon'/>
                </button>
            </div>
            <button className="mallButton">
                <Link href="/carrinho">
                    <BsBag className='navIcon'/>
                </Link>
            </button>

            {localStorage.getItem('token') && (
                <button className='mallButton' onClick={()=>{
                    setAdmWindow(!admLoginWindow)
                    setWindow(false)}}>
                    <BsBriefcase className='navIcon'/>
                </button>
            )}

            <button className='mallButton' onClick={()=>{
                setWindow(!loginWindow)
                setAdmWindow(false)}}>
                <BsPerson className='navIcon'/>
            </button>

            {!localStorage.getItem('token') && loginWindow && (
                <div id='loginWindow'>
                    <p>Tem uma conta? Faça login!</p>
                    <Link href='/signin'>
                        <button>Faça login!</button>
                    </Link>
                    <p>Ainda não tem uma conta?</p>
                    <Link href='/signup'>
                        <button>Cadastre-se!</button>
                    </Link>
                </div>
            )}
            {admLoginWindow && (
                <div id="loginAdmWindow">
                    <p>Acessar dados da conta ou produtos?</p>
                    <Link href='/marketplace'>
                        <button> Clique aqui! </button>
                    </Link>
                    <p>Gerar compras, produtos e promoções?</p>
                    <Link href='/dashboard'>
                        <button> Clique aqui! </button>
                    </Link>
                </div>
            )}
            {localStorage.getItem('token') && loginWindow && (
                <div id='loginWindow'>
                    <p>Acesse:</p>
                    <Link href='/profile'>
                        <button>Meu perfil</button>
                    </Link>
                    <p>Ou:</p>
                    <Link href='/'>
                        <button onClick={()=>{localStorage.removeItem("token")}}>Fazer Logoff</button>
                    </Link>
                </div>
            )}
        </nav>
    )
}
export default Navbar