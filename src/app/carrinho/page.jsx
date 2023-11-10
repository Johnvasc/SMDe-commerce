"use client"

import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import '../Styles/pages.css'
import '../Styles/signin.Modules.css'
import ProductOnCart from '../Components/ProductOnCart'
import { useEffect, useState } from 'react'


function page(){
    const userToken = localStorage.getItem('token')
    var useToken = false
    const [products, setProducts] = useState()
    var cart
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
        if(userToken){
            useToken = true
            const options = {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
                }
            }
            try{
                const res = await fetch('http://localhost:8080/catchCart', options)
                if(res.status==200){
                    const resp = await res.json()
                    cart = resp.res.rows
                    console.log(cart)
                }
            }catch(error){
                console.log(error)
            }
        }else{
            useToken = false
            cart = localStorage.getItem('cartToken')
        }
        let products = []
        for(let i=0; i<listProducts.length; i++){
            if(cart[0].Products.includes(listProducts[i].ID)){
                products.push(listProducts[i])
            }
        }
        console.log(listProducts)
        console.log(products)
        setProducts(products)
    }
    async function makeSale(){
        if(!useToken){
            window.location.href = '/signin'
            return
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            }
        }
        try{
            const res = await fetch('http://localhost:8080/makeSale', options)
            if(res.status==200){
                window.location.href = '/carrinho'
            }
        }catch (error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getProducts()
    },[])
    return(
        <>
            <Navbar/>
            <main id="cartBody" className='padding3h'>
                <h2>Seu carrinho:</h2>
                <hr/>
                {products && (
                    <section>
                        {products.map((product)=>(
                            <ProductOnCart key={product.ID} name={product.Name} image={product.Image} price={product.Price}/>
                        ))}
                    </section>
                )}
                <div>
                    <button className='btnWhite' onClick={()=>{makeSale()}}>Comprar</button>
                </div>           
            </main>   
            <Footer/> 
        </>
    )
}
export default page