"use client"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import UpDownButton from "../Components/UpDownButton"
import "../Styles/Dashboard.Modules.css"
import "../Styles/Pages.css"
import {BsGear} from "react-icons/bs"
import {BsCheckLg} from "react-icons/bs"
import { useState } from "react"


const sales = [{
        image: "https://picsum.photos/100/101",
        title: "produto A",
        price: "125.50",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus laboriosam nemo sit autem veniam sunt a ullam iure inventore soluta consequatur molestias odio impedit corrupti maxime nulla deserunt, est necessitatibus.",
        date: "12/12/2022"
    },
    {
        image: "https://picsum.photos/101/101",
        title: "produto B",
        price: "98.50",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus laboriosam nemo sit autem veniam sunt a ullam iure inventore soluta consequatur molestias odio impedit corrupti maxime nulla deserunt, est necessitatibus.",
        date: "13/01/2023"
    },
]

export default function page(){
    
    const [userTable, setTable] = useState(false)
    return(
        <>
            <Navbar></Navbar>
            <section className="line">
                {!userTable && (
                    <div className="userTable">
                        <h3>Meu perfil</h3>
                        <div>
                            <h4>Nome:</h4>
                            <p>John</p>
                            <h4>Username:</h4>
                            <p>Johnvasc1998</p>
                            <h4>Senha:</h4>
                            <p>************</p>
                        </div>
                        <BsGear className="filter" onClick={()=>setTable(true)}/>
                    </div>
                )}
                {userTable && (
                    <div className="userTable">
                        <h3>Editar Perfil</h3>
                        <div>
                            <h4>Nome:</h4>
                            <input type="text" />
                            <h4>Username:</h4>
                            <input type="text" />
                            <h4>Senha:</h4>
                            <input type="password" name="" id="" />
                        </div>
                        <BsCheckLg className="filter" onClick={()=>setTable(false)}/>
                    </div>
                )}
                <section className="padding3h">
                    <div className="line">
                        <h3>Minhas compras</h3>
                        <div className="line">
                            <h4>Ordenar por preço:</h4>
                            <UpDownButton/>
                        </div>
                    </div>
                    {sales.map((item)=>(
                        <div className="line productItem centralize">
                            <img src={item.image} alt="" />
                            <h3>{item.date}</h3>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <div className="line"><h2 className="priceTitle">{item.price}</h2>R$</div>
                        </div>
                    ))}
                </section>
            </section>

            <Footer></Footer>
        </>
    )
}