"use client"
import "../Styles/Pages.css"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

export default function page({search}){
    return (
        <>
            <Navbar></Navbar>
            <section className="padding3h">
                <h2>Você buscou por: {search}</h2>
                
            </section>
            <Footer></Footer>
        </>
    )
}