"use client"
import {BsDoorOpen} from "react-icons/bs"
import { BsArrowDownCircle } from "react-icons/bs"
import "../Styles/Pages.css"
import Link from 'next/link'
import { useEffect, useState } from "react"
import html2pdf from 'html2pdf.js'

export default function page(){

    const token = localStorage.getItem('token')
    async function getInfos(){
        var packageAux = []
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
          }
        try{
            const res = await fetch('http://localhost:8080/getFileInfo', options)
            if(res.status==200){
                
                var resp = await res.json()
                resp = {sales: resp.res[0].rows, products: resp.res[1].rows, users: resp.res[2].rows, totalValue: resp.res[3].rows[0]}
                for(let i = 0; i < resp.sales.length; i++){
                    let aux
                    let productsAux = []
                    for(let j = 0; j < resp.sales[i].Products.length; j++){
                        for(let k = 0; k < resp.products.length; k++){
                            if(resp.sales[i].Products[j] == resp.products[k].ID) productsAux.push(resp.products[k].Name)
                        }
                    }
                    for(let j = 0; j < resp.users.length; j++){
                        if(resp.sales[i].Owner == resp.users[j].ID){
                            aux = {user: resp.users[j].Name, saleID: resp.sales[i].ID, products: productsAux, value: resp.sales[i].Value}
                        }
                    }
                    packageAux.push(aux)
                }
                packageAux = packageAux.filter((element) => element !== undefined)
                console.log(resp.totalValue)
                const dateAct = new Date()
                const dateFormat = { year: 'numeric', month: 'long', day: 'numeric' }
                const dateStan = dateAct.toLocaleDateString('pt-BR', dateFormat)
                const h1 = document.getElementById('totalValue')
                const toString = resp.totalValue.totalvalue
                h1.innerText = `Renda obtida: ${toString}`
                const date = document.getElementById('InstantDate')
                date.innerText = `Gerado em: ${dateStan}`
                const divReport = document.getElementById('reportDiv')
                for(let i = 0; i<packageAux.length; i++){
                    let div = document.createElement('div')
                    div.setAttribute('class', 'reportCard')
                    let number = document.createElement('h5')
                    number.innerText = `ID: ${packageAux[i].saleID}`
                    div.appendChild(number)
                    let client = document.createElement('h5')
                    client.innerText = `cliente: ${packageAux[i].user}`
                    div.appendChild(client)
                    let products = document.createElement('h5')
                    products.innerText = `produtos: ${JSON.stringify(packageAux[i].products)}`
                    div.appendChild(products)
                    let valueSale = document.createElement('h5')
                    valueSale.innerText = `valor da compra: ${packageAux[i].value}`
                    div.appendChild(valueSale)
                    divReport.appendChild(div)
                }
            }
        }catch(error){
            console.log(error)
        }
    }
    async function makePDF(){
       const content = document.getElementById('pdf-content')
       console.log(content)
       const pdfOptions = {
        margin: 10,
        filename: 'documento.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };
        console.log(html2pdf().set(pdfOptions).from(content).save())

    }
    return(
        <div>
            <nav className="line centralize">
                <h1 className="ephesis">SMDe-commerce</h1>
                <button className="btnWhite" onClick={()=>{getInfos()}}>Gerar relatório</button>
                <button className="btnWhite" onClick={()=>{makePDF()}}>Baixar PDF</button>
                <Link href='/'>
                    <BsDoorOpen className="filter"></BsDoorOpen>
                </Link>
            </nav>
            <div id="pdf-content">
                <h1 className="ephesis">SMDe-commerce</h1>
                <div className="line">
                    <h3 id="totalValue"></h3>
                    <h3 id="InstantDate"></h3>
                </div>
                <div id="reportDiv" className="column">
                </div>
            </div>
        </div>
    )
}