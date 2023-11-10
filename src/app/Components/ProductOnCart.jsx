"use client"

import '../Styles/Pages.css'
import {BsFillPlusSquareFill} from "react-icons/bs"
import {BsFillDashSquareFill} from "react-icons/bs"
import '../Styles/Carrinho.Modules.css'
import { useState } from 'react'

export default function ProductOnCart({name, qtde, image, price}){
    const [qtdItens, setQtde] = useState(qtde)
    const [totalPrice, setPrice] = useState(price*qtdItens)
    function changeQtde(index){
        let currentQtde = +(qtdItens) + +(index)
        if(currentQtde == -1) setQtde(0)
        else if(currentQtde == 100) setQtde(99)
        else{
            setQtde(currentQtde)
            setPrice(price*qtdItens)
        }
    }
    return(
        <div className='productInterface'>
            <div>
                <img className='imgLittle' src={image} alt="" />
                <h3>{name}</h3>
            </div>
            <div>
                <div className='productPlusMinus'>
                    <BsFillPlusSquareFill className='filter' onClick={()=>{changeQtde(1)}}/>
                    <input type="text" value={qtdItens}/>
                    <BsFillDashSquareFill className='filter' onClick={()=>{changeQtde(-1)}}/>
                </div>
                <h2>{totalPrice} R$</h2>                                
            </div>
        </div>
    )
}