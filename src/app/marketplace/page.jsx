"use client"
import "../Styles/Pages.css"
import "../Styles/Dashboard.Modules.css"
import {updateCat} from "../Scripts/script.js"
import {updateProd} from "../Scripts/script.js"
import UpDownButton from "../Components/UpDownButton"
import AdminNav from "../Components/AdminNav"
import {BsPerson} from "react-icons/bs"
import {BsBox} from "react-icons/bs"
import {BsAward} from "react-icons/bs"
import {BsPencilSquare} from "react-icons/bs"
import {BsTrash3} from "react-icons/bs"
import { useState, useEffect } from "react"



export default function page(){
    const token = localStorage.getItem('token')
    
    // Use States relacionados ao usuário
    const [user, setUser] = useState()
    const [userName, setUserName] = useState()
    const [userUsername, setUserUsername] = useState()
    const [userEmail, setUserEmail] = useState()
    const [userPass, setUserPass] = useState()
    const [userError, setUserError] = useState()

    // Use States relacionados a promotions
    const [promotions, setPromotions] = useState()
    
    // Use States relacionados a products
    const [products, setProducts] = useState()
    const [editProduct, setEditProd] = useState()
    const [nameProduct, setNameProd] = useState()
    const [imageProduct, setImageProd] = useState()
    const [categoryProduct, setCatProd] = useState()
    const [priceProduct, setPriceProd] = useState()
    const [stockProduct, setStockProd] = useState()
    const [descriptionProduct, setDescriptionProd] = useState()
    
    //Use States relacionados a categories
    const [categories, setCategories] = useState()
    const [editCategorie, setEditCat] = useState()
    const [nameCategorie, setNameCat] = useState()
    const [imageCategorie, setImageCat] = useState()

    const [option, setOption] = useState(0)
    
    async function checkAuthorization(){
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
        }
        try{
            const response = await fetch('http://localhost:8080/checkAdmin', options)
            const data = await response.json();            
            if(response.status!==200) window.location.href = '/'
        }catch(error){
            console.error('Erro:', error);
        }        
    }

    async function delCat(id){
        const data = {ID: id}
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        }
        try{
            const res = await fetch('http://localhost:8080/delCategory', options)
            if(res.status==200){
                const resp = await res.json()
                window.location.href = '/marketplace'
            }
        }catch (error){
            console.log(error)
        }
    }
    async function delProd(id){
        const data = {ID: id}
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        }
        try{
            const res = await fetch('http://localhost:8080/delProduct', options)
            if(res.status==200){
                const resp = await res.json()
                window.location.href = '/marketplace'
            }
        }catch (error){
            console.log(error)
        }
    }
    async function delUser(){
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        try{
            const res = await fetch('http://localhost:8080/delUser', options)
            if(res.status==200){
                const resp = await res.json()
                window.location.href = '/marketplace'
            }
        }catch (error){
            console.log(error)
        }
    }
    async function updUser(){
        const data = {name: userName, login: userUsername, email: userEmail, password: userPass, ID: user}
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        }
        try{
            const res = await fetch('http://localhost:8080/updAdm', options)
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

    async function getCat(){
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try{
            const res = await fetch('http://localhost:8080/getCategories', options)
            if(res.status==200){
                const resp = await res.json()
                console.log(resp.res.rows)
                setCategories(resp.res.rows)
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
            console.log(resp.res.rows)
            setProducts(resp.res.rows)
          }
        }catch (error){
          console.log(error)
        }
    }
    async function getPromos(){
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        }
        try{
          const res = await fetch('http://localhost:8080/getPromotions', options)
          if(res.status==200){
            const resp = await res.json()
            setPromotions(resp.res.rows)
          }
        }catch (error){
          console.log(error)
        }
    }
    async function getUser(){
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }
        try{
          const res = await fetch('http://localhost:8080/getAdm', options)
          if(res.status==200){
            const resp = await res.json()
            setUser(resp.res.rows[0].ID)
            setUserName(resp.res.rows[0].Name)
            setUserUsername(resp.res.rows[0].Login)
            setUserEmail(resp.res.rows[0].Email)
            setUserPass(resp.res.rows[0].Password)
          }
        }catch (error){
          console.log(error)
        }
    }
    
    useEffect(() => {
        checkAuthorization()
        getUser()
        getPromos()
        getProducts()
        getCat()
    }, []);
    return(
        <>
            <AdminNav value="rel_button"></AdminNav>
            <div className="line padding3h">
                <div>
                    <button className="btnWhite" onClick={()=>setOption(1)}>
                        <BsPerson></BsPerson>
                        Perfil
                    </button>
                </div>
                <div>
                    <button className="btnWhite" onClick={()=>{setOption(2)}}>
                        <BsAward/>
                        Categorias
                    </button>
                </div>
                <div>
                    <button className="btnWhite" onClick={()=>setOption(3)}>
                        <BsBox/>
                        Produtos
                    </button>
                </div>
            </div>
            {option==1 && user && (
                <div className="centralizeCol">
                    <div className="pinkBox centralizeCol">
                        <input className="pinkInput" type="text" placeholder="nome" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
                        <input className="pinkInput" type="text" placeholder="username" value={userUsername} onChange={(e)=>{setUserUsername(e.target.value)}}/>
                        <input className="pinkInput" type="text" placeholder="email" value={userEmail} onChange={(e)=>{setUserEmail(e.target.value)}}/>
                        <input className="pinkInput" type="password" placeholder="password" value={userPass} onChange={(e)=>{setUserPass(e.target.value)}}/>
                        <button className="btnWhite" onClick={()=>{updUser()}}>Salvar alterações</button>
                        <button className="btnRed" onClick={()=>{delUser()}}>Apagar conta</button>
                        {userError && (
                            <div>
                                <p>{userError}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
            {option==2 && categories &&(
                <div>
                    {categories.map((category)=>(
                        <div key={category.ID} className="catContainer column">
                            <div className="line colums4">
                                <h3>{category.Name}</h3>
                                <h3>{category.ID}</h3>
                                <BsPencilSquare className="filter" onClick={()=>{
                                    setNameCat(category.Name)
                                    setImageCat(category.Image)
                                    setEditCat(category.ID)
                                }}/>
                                <BsTrash3 className="filter" onClick={()=>{delCat(category.ID)}}/>
                            </div>
                            {editCategorie == category.ID && (
                                <div className="columns4 margin3h editionField">
                                        <div>
                                        <label>Nome:</label>
                                        <input type="text" placeholder="Nome da Categoria" value={nameCategorie} onChange={(e)=>setNameCat(e.target.value)}/>
                                    </div>
                                    <div>
                                        <label>Url da Imagem:</label>
                                        <input type="text" placeholder="Imagem da Categoria" value={imageCategorie} onChange={(e)=>setImageCat(e.target.value)}/>
                                    </div>
                                    <button className="btnWhite" onClick={()=>updateCat(nameCategorie, imageCategorie, category.ID)}>Enviar dados</button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
            {option==3 && products && (
                <div>
                    {products.map((item)=>(
                        <div key={item.ID} className="prodContainer column">
                            <div className="line column5 margin3v">
                                <img src={item.Image} className="imgLittle"/>
                                <h3>{item.Name}</h3>
                                <h3>{item.ID}</h3>
                                <BsPencilSquare className="filter" onClick={()=>{
                                    setNameProd(item.Name)
                                    setImageProd(item.Image)
                                    setCatProd(item.Category)
                                    setPriceProd(item.Price)
                                    setStockProd(item.qtde_Stock)
                                    setDescriptionProd(item.Description)
                                    setEditProd(item.ID)}}/>
                                <BsTrash3 className="filter" onClick={()=>{delProd(item.ID)}}/>
                            </div>
                            {editProduct == item.ID && (
                                <div className="margin3h editionField">
                                    <div className="columns4">
                                        <div>
                                            <label>Nome:</label>
                                            <input type="text" placeholder="Nome do Produto" value={nameProduct} onChange={(e)=>setNameProd(e.target.value)}/>   
                                        </div>
                                        <div>
                                            <label>Preço:</label>
                                            <input type="number" placeholder="Preço" value={priceProduct} onChange={(e)=>setPriceProd(e.target.value)}/>
                                        </div>
                                        <div>
                                            <label>Categoria:</label>
                                            <input type="number" placeholder="Categorie" value={categoryProduct} onChange={(e)=>setCatProd(e.target.value)}/>
                                        </div>
                                        <div>
                                            <label>Estoque:</label>
                                            <input type="number" placeholder="Estoque" value={stockProduct} onChange={(e)=>setStockProd(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="line">
                                        <div>
                                            <label>Imagem:</label>
                                            <input type="text" placeholder="Url" value={imageProduct} onChange={(e)=>setImageProd(e.target.value)} />
                                        </div>
                                        <div className="descriptionFields">
                                            <label>Descrição:</label>
                                            <textarea rows='9' cols='70' value={descriptionProduct} onChange={(e)=>setDescriptionProd(e.target.value)}/>
                                        </div>
                                        <button className="btnWhite" onClick={()=>updateProd(nameProduct, imageProduct, priceProduct, stockProduct, categoryProduct, descriptionProduct, item.ID)}>Enviar alterações</button> 
                                    </div>                                 
                                </div>
                            )}
                        </div>
                
                    ))}
                </div>
            )}
        </>
    )
}