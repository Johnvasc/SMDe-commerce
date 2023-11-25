"use client"
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../Styles/Pages.css'
import '../Styles/MyProduct.Modules.css'
import { useEffect } from 'react'

export default function myproduct(){
    var itensQueue = []
    const userToken = localStorage.getItem('token')
    var cartToken = cartToken = JSON.parse(localStorage.getItem('cartToken')) || [];
    const params = new URLSearchParams(window.location.search)
    const id = parseInt(localStorage.getItem('productExplain'))

    async function sendToCart(){
        if(!userToken){
            cartToken.push(id)
            localStorage.setItem('cartToken', JSON.stringify(cartToken))
            window.location.href = '/carrinho'
        }
        else{
            let product = {product: id}
            console.log(product.product)
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
                    window.location.href = '/carrinho'
                }
            }catch(err){
                console.log(err)
            }
        }
    }
    async function catchProduct(){

        const data = {id: id}
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        try{
            const res = await fetch('http://localhost:8080/catchProduct', options)
            if(res.status==200){

                const resp = await res.json();
                const product = resp.res.rows[0]
                console.log(product)
                const productName = document.getElementById('productName')
                const productImage = document.getElementById('productImage')
                const productDescription = document.getElementById('productDescription')
                const productPrice = document.getElementById('productPrice')
                productName.innerText = product.Name
                productDescription.innerText = product.Description
                productPrice.innerText = ` ${product.Price} R$`
                productImage.setAttribute('src', product.Image)
            }
        }catch(error){
            console.log(error)
        }

    }
    useEffect(() => {

        catchProduct();
    }, []);
    return(
        <>
            <Navbar></Navbar>
            <section className='margin3v padding3h'>
                <div className='lineBetween '>
                    
                    <img src="" alt="" id='productImage' />
                    
                </div>
                <hr />
                <div>
                    <h1 id='productName'>Nome do produto</h1>
                    <p id='productDescription'>descricao do produto</p>
                    <div>
                        <h3 id='productPrice'>0.00 R$</h3>
                        <button className='btnYellow' onClick={()=>sendToCart()} >Adicionar ao carrinho</button>
                    </div>
                </div>
            </section>
            
            <Footer></Footer>
        </>
    )
}