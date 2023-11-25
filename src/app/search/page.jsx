"use client"
import "../Styles/Pages.css"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { useEffect, useState } from "react"
import Link from 'next/link'

export default function page(){
    const queryString = window.location.search
    const params = new URLSearchParams(queryString)
    const search = localStorage.getItem('searchKey')

    var [results, setResults] = useState()
    async function getResults(){
        console.log(search)
        const data = {name: search}
        console.log(data)
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }
        try{
            const res = await fetch('http://localhost:8080/search', options)
            if(res.status==200){
                const resp = await res.json()
                console.log(resp.res.rows)
                setResults(resp.res.rows)
            }
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getResults()
    }, [])
    return (
        <>
            <Navbar></Navbar>
            <section className="padding3h">
                <h2>Você buscou por: {search}</h2>
                {results && results.map((product)=>(
                    <div className="line margin3v">
                        <div className="imgMid">
                            <img className="imgMid" src={product.Image} alt="" />
                        </div>
                        <h3>{product.Name}</h3>
                        <h3>{product.Price} R$</h3>
                        <Link href={`/myproduct?product=${product.ID}`} className="btnYellow">
                            ver produto
                        </Link>
                    </div>
                ))

                }
            </section>
            <Footer></Footer>
        </>
    )
}