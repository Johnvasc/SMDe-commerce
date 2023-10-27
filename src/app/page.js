"use client"

import Navbar from "./Components/Navbar"
import Products from "./Components/Products"
import Footer from "./Components/Footer"
import Slider from "./Components/Slider"
import Categories from "./Components/Categories"
import { useEffect, useState } from 'react';

export default function Home() {

  const [products, setProducts] = useState()
  const [categories, setCategories] = useState()
  const [promotions, setPromotions] = useState()
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
    console.log('dinossauro!')
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
        console.log(resp)
        setPromotions(resp.res.rows)
      }
    }catch (error){
      console.log(error)
    }
  }


  useEffect(() => {
      getPromos()
      getProducts()
      getCat()
  }, []);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Navbar></Navbar>
        {promotions && <Slider promotions={promotions}></Slider>}
        {products && <Products products={products}></Products>}
        {categories && <Categories categories={categories}></Categories>}
        <Footer></Footer>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </main>    
    </>

  )
}
