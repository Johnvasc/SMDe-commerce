"use client"

import '../Styles/Pages.css'
import '../Styles/Products.Modules.css'
import { BsFillCartPlusFill, BsCartPlus, BsCaretUpSquare } from "react-icons/bs";
import Link from 'next/link';
import { useState } from 'react';
import { useEffect } from 'react';


export default function Products({products}){
    const userToken = localStorage.getItem('token')
    const [onCart, setOnCart] = useState([])
    async function sendToCart(id){
        let productsAddCart = onCart.concat(id)
        if (!userToken) {
            let cartToken = localStorage.getItem('cartToken')
            let parsedCartToken = []
            if(!cartToken) parsedCartToken = []
            else parsedCartToken = JSON.parse(cartToken)
            parsedCartToken.push(id)
            localStorage.setItem('cartToken', JSON.stringify(parsedCartToken))
          
            const productsAddCart = onCart.concat(id);
            setOnCart(productsAddCart)
          }
          
        else{
            let product = {product: id}
            const options = {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${userToken}`
                },
                body: JSON.stringify(product)
            }
            try{
                const res = await fetch('http://localhost:8080/updCart', options)
                if(res.status==200){
                    setOnCart(productsAddCart)
                }
            }catch(err){
                console.log(err)
            }
        }
    }
    return (
        <section className="bg-white" id='productsContainer'>
            <div className='padding3h'>
                <h2>Confira nossos produtos:</h2>
                <div className='productInnerContainer'>
                {products.map((product) => (
                    <div className='productCard' key={product.ID}>
                        <img src={product.Image} alt="" />
                        <div className='line'>
                            <h3>{product.Name}</h3>
                            <h3> - </h3>
                            <h4>{product.Price} R$</h4>
                        </div>
                        <div className='column'>
                            <Link href={`/myproduct`}>
                                <button onClick={()=>{localStorage.setItem('productExplain', `${product.ID}`)}}>
                                    <BsCaretUpSquare/>
                                </button>                        
                            </Link>
                            {!onCart.includes(product.ID) && (
                                <button className='margin1h' onClick={()=>sendToCart(product.ID)}>
                                    <BsCartPlus/>
                                </button>
                            )}
                            {onCart.includes(product.ID) && (
                                <p>Adicionado ao carrinho</p>
                            )}
                        </div>
                            
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}
