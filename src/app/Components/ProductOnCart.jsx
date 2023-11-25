"use client"

import '../Styles/Pages.css'
import {BsFillPlusSquareFill} from "react-icons/bs"
import {BsFillDashSquareFill} from "react-icons/bs"
import '../Styles/Carrinho.Modules.css'
import { BsFillTrash3Fill } from "react-icons/bs";
import { useState } from 'react'

export default function ProductOnCart({name, qtde, image, price, id}){
    var cartToken = JSON.parse(localStorage.getItem('cartToken'))
    const userToken = localStorage.getItem('token')
    async function removeItem(id){
        if(!userToken){
            cartToken.splice(cartToken.indexOf(id), 1)
            localStorage.setItem('cartToken', JSON.stringify(cartToken))
            window.location.href = '/carrinho'
            return
        }
        const data = {product: id}
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            },
            body: JSON.stringify(data)
        }
        console.log(options)
        try{
            const res = await fetch('http://localhost:8080/removeFromCart', options)
            if(res.status==200){
                window.location.href = '/carrinho'
            }
        }catch (error){
            console.log(error)
        }
    }
    const [qtdItens, setQtde] = useState(qtde)
    const [totalPrice, setPrice] = useState(price*qtdItens)
    return(
        <div className='productInterface'>
            <img className='imgLittle' src={image} alt="" />
            <h3>{name}</h3>
            <h3>{price} R$</h3>
            <button className='btnWhite' onClick={()=>{removeItem(id)}}>
                <BsFillTrash3Fill/>
            </button>                           
        </div>
    )
}