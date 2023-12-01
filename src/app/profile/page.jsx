"use client"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import UpDownButton from "../Components/UpDownButton"
import "../Styles/Dashboard.Modules.css"
import "../Styles/Pages.css"
import {BsGear} from "react-icons/bs"
import {BsCheckLg} from "react-icons/bs"
import { useEffect, useState } from "react"

export default function page(){
    const token = localStorage.getItem('token')

    const [user, setUser] = useState()
    const [userName, setUserName] = useState()
    const [userPass, setUserPass] = useState()
    const [userLogin, setUserLogin] = useState()
    const [userEmail, setUserEmail] = useState()
    const [userProds, setUserProducts] = useState()
    const [products, setProducts] = useState()
    var sales = []
    var control = true

    async function getUser(){
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }
        try{
          const res = await fetch('http://localhost:8080/getUser', options)
          if(res.status==200){
            const resp = await res.json()
            setUser(resp.res.rows[0].ID)
            setUserName(resp.res.rows[0].Name)
            setUserLogin(resp.res.rows[0].Login)
            setUserEmail(resp.res.rows[0].Email)
            setUserPass(resp.res.rows[0].Password)
          }
        }catch (error){
          console.log(error)
        }
    }
    async function getSales(){
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
        }
        try{
            const res = await fetch('http://localhost:8080/catchSales', options)
            if(res.status==200){
                const resp = await res.json()
                if(!control) return ///variavel de controle para excecução de função duplicada do next em modo dev
                for(let i = 0; i < resp.res.rows.length; i++){
                    for(let j = 0; j < resp.res.rows[i].Products.length; j++){
                        sales.push(resp.res.rows[i].Products[j])
                    }
                }
                control = false
            }
        }catch (error){
            console.log(error)
        }
    }
    async function getProducts(){
        const options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            }
        }
        try{
            const res = await fetch('http://localhost:8080/getProducts', options)
            if(res.status==200){
                const resp = await res.json()
                var listProducts = resp.res.rows
            }
        }catch (error){
            console.log(error)
        }
        let products = []
        console.log(listProducts)
        if(sales){
            for(let i=0; i<sales.length; i++){
                for(let j=0; j<listProducts.length; j++){
                    if(listProducts[j].ID == sales[i]){
                        products.push(listProducts[j])
                        continue
                    }
                }
            }
        }
        setProducts(products)
    }
    async function updUser(){
        const data = {name: userName, login: userLogin, email: userEmail, password: userPass, ID: user}
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        }
        try{
            const res = await fetch('http://localhost:8080/updUser', options)
            if(res.status==200){
                const resp = await res.json()
                window.location.href = '/marketplace'
            }
            else{
                const resp = await res.json()
                setUserError(resp.msg)
            }
        }catch(error){
            console.log(error)
        }
    }
    async function deleteUser(){
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        try{
            const res = await fetch('http://localhost:8080/delUser', options)
            if(res.status==200){
                localStorage.removeItem("token")
                const resp = await res.json()
                window.location.href = '/'
            }
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getUser()
        getSales()
        getProducts()
    },[])

    const [userTable, setTable] = useState(false)
    return(
        <>
            <Navbar></Navbar>
            <section className="lineUp">
                {!userTable && (
                    <div className="userTable">
                        <h3>Meu perfil</h3>
                        <div>
                            <h4>Nome:</h4>
                            <p>{userName}</p>
                            <h4>Username:</h4>
                            <p>{userLogin}</p>
                            <h4>Email:</h4>
                            <p>{userEmail}</p>
                            <h4>Senha:</h4>
                            <p>************</p>
                        </div>
                        <BsGear className="filter" onClick={()=>setTable(true)}/>
                    </div>
                )}
                {userTable && (
                    <div className="userTable">
                        <h3>Editar Perfil</h3>
                        <div>
                            <h4>Nome:</h4>
                            <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
                            <h4>Username:</h4>
                            <input type="text" value={userLogin} onChange={(e)=>{setUserLogin(e.target.value)}}/>
                            <h4>Email:</h4>
                            <input type="text" value={userEmail} onChange={(e)=>{setUserEmail(e.target.value)}}/>
                            <h4>Senha:</h4>
                            <input type="password" value={userPass} onChange={(e)=>{setUserPass(e.target.value)}}/>
                            <button className="btnRed font13" onClick={()=>{deleteUser()}}>deletar conta</button>
                        </div>
                        <BsCheckLg className="filter" onClick={()=>{
                            updUser()
                            setTable(false)
                        }}/>
                        
                    </div>
                )}
                <section className="padding3h">
                    <div className="line">
                        <h3>Minhas compras</h3>
                        <div className="line">
                            <h4>Ordenar por preço:</h4>
                            <UpDownButton/>
                        </div>
                    </div>
                    {products && (
                        products.map((item)=>(
                            <div key={item.ID} className="line productItem centralize">
                                <img className="imgLittle" src={item.Image} alt="" />
                                <h3>{item.Date}</h3>
                                <h4>{item.Title}</h4>
                                <div className="line"><h2 className="priceTitle">{item.Price}</h2>R$</div>
                            </div>
                        ))
                    )}

                </section>
            </section>

            <Footer></Footer>
        </>
    )
}