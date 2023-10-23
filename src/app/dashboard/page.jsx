"use client"
import "../Styles/Pages.css"
import "../Styles/Dashboard.Modules.css"
import UpDownButton from "../Components/UpDownButton"
import {BsFilter} from "react-icons/bs"
import {BsFillXCircleFill} from "react-icons/bs"
import {BsSortAlphaDownAlt} from "react-icons/bs"
import {BsSortAlphaDown} from "react-icons/bs"
import { useState } from "react"
import AdminNav from "../Components/AdminNav"

const outOfStock = [
    {
        stockId: 33,
        sDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, rem nesciunt delectus quidem quo?",
        sPrice: "125.50"
    },
    {
        stockId: 25,
        sDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, perspiciatis!",
        sPrice: "90.15"
    }
]
const sales = [
    {
        image: "https://picsum.photos/100/101",
        name: "produto A",
        id: 122,
        totalSales: 14,
        price: "25.90",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur mollitia, sapiente voluptatum voluptas perferendis eaque minus exercitationem numquam. Inventore quia earum consequuntur laboriosam cum quas?",
        quantity: 3
    },
    {
        image: "https://picsum.photos/101/100",
        name: "produto B",
        id: 142,
        totalSales: 3,
        price: "29.90",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur mollitia, sapiente voluptatum voluptas perferendis eaque minus exercitationem numquam. Inventore quia earum consequuntur laboriosam cum quas?",
        quantity: 5
    },
]

const purchases = [{
    name: 'john vasconcelos',
    id: 124,
    totalPurc: 5
},
{
    name: 'will vasconcelos',
    id: 2526,
    totalPurc: 12
}
]

const totalSales = [{
    date: "10/09/2023",
    valueSale: "27.90"
}]


export default function page(){
    const [filterStatus, setFilter] = useState(false)
    const [insertItem, setInsert] = useState(0)
    return(
        <section className="padding3h">
            <AdminNav value = "prof_button"/>
            <h2>Adicionar itens:</h2>
            <div className="line centralize">
                <button className="btnWhite" onClick={()=>setInsert(1)}>Novo Produto</button>
                <button className="btnWhite" onClick={()=>setInsert(2)}>Nova Categoria</button>
                <button className="btnWhite" onClick={()=>setInsert(3)}>Nova Promoção</button>
            </div>
            {insertItem==1 &&(
                <div>
                    <div className="line">
                        <h3>Inserir Produto:</h3>
                        <BsFillXCircleFill onClick={()=>{setInsert(0)}} className="filter"/>
                    </div>

                    <div className="line">
                        <input type="text" placeholder="Nome do Produto"/>
                        <input type="number" placeholder="Preço"/>
                        <input type="number" placeholder="Qtd em Estoque"/>
                        <input type="text" placeholder="Link da imagem"/>
                        <button className="btnWhite">Adicionar</button>
                    </div>
                </div>
            )
            }
            {insertItem==2 &&(
                <div>
                    <div className="line">
                        <h3>Inserir Categoria:</h3>
                        <BsFillXCircleFill onClick={()=>{setInsert(0)}} className="filter" />
                    </div>
                    <div className="line">
                        <input type="text" placeholder="Nome da categoria"/>
                        <input type="text" placeholder="Link da imagem"/>
                        <button className="btnWhite">Adicionar</button>
                    </div>
                </div>
            )
            }           
            {insertItem==3 &&(
                <div>
                    <div className="line">
                        <h3>Inserir Promoção:</h3>
                        <BsFillXCircleFill onClick={()=>{setInsert(0)}} className="filter" />
                    </div>
                    <div className="line">
                        <input type="text" placeholder="Nome do Produto"/>
                        <input type="date" placeholder="Inicio"/>
                        <input type="date" placeholder="Fim"/>
                        <p>Promoção sazonal:</p>
                        <input type="checkbox" name="" id="" /> 
                        <button className="btnWhite">Adicionar</button>
                    </div>
                </div>
            )
            }           
            <h2>Produtos em estoque:</h2>
            <div className="line centralize">
                { filterStatus && (<BsSortAlphaDown className="filter" onClick={()=>setFilter(false)}/>)
                }
                { !filterStatus && (<BsSortAlphaDownAlt className="filter" onClick={()=>setFilter(true)}/>)
                }
                <h3>Ordenar alfabeticamente</h3>
            </div>
            <div className="productsDashboard">
                {sales.map((product)=>(
                    <div className="line productItem centralize">
                        <img src={product.image} alt=""/>
                        <h3>{product.name}</h3>
                        <h3>id: {product.id}</h3>
                        <h3>vendas: {product.totalSales}</h3>
                        <h3>R$ {product.price}</h3>
                        <p>{product.description}</p>
                        <h3>qtde: {product.quantity}</h3>
                    </div>
                ))
                }
            </div>
            <h2>Compras por clientes:</h2>
            <div className="line centralize">
                <UpDownButton/>
                <h3>Ordenar total de compras</h3>
            </div>
            
            <div id="purchases" className="productsDashboard">
                {purchases.map((client)=>(
                    <div className="line productItem centralize">
                        <h3>nome: {client.name}</h3>
                        <h3>id: {client.id}</h3>
                        <h3>total de compras: {client.totalPurc}</h3>
                    </div>
                ))}
            </div>
            <h2>Itens fora de estoque:</h2>
            <div id="outOfStock" className="productsDashboard">
                {outOfStock.map((item)=>{
                    <div className="line productItem centralize">
                        <h3>id: {item.stockId}</h3>
                        <h3>descrição: {item.sDescription}</h3>
                        <h3>preço: {item.sPrice} R$</h3>
                    </div>
                })

                }
            </div>
            <h2>Compras nos últimos dias:</h2>
            <div className="line centralize">
                <UpDownButton/>
                <h3>Ordenar dia</h3>
            </div>
            <div className="productsDashboard">
                {totalSales.map((saleday)=>{
                    <div className="line productItem centralize">
                        <h3>{saleday.date}</h3>
                        <h3>{saleday.valueSale}</h3>
                    </div>
                })}
            </div>
        </section>
    )
}