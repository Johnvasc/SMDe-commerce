"use client"
import "../Styles/Pages.css"
import "../Styles/Dashboard.Modules.css"
import UpDownButton from "../Components/UpDownButton"
import AdminNav from "../Components/AdminNav"
import {BsPerson} from "react-icons/bs"
import {BsBox} from "react-icons/bs"
import {BsAward} from "react-icons/bs"
import {BsPencilSquare} from "react-icons/bs"
import {BsTrash3} from "react-icons/bs"
import { useState } from "react"

const categories = [{
    name: 'roupas',
    id: 1
},{
    name: 'calçados',
    id: 2
},{
    name: 'tecnologia',
    id: 3
}
]
const products = [{
    image: "https://picsum.photos/100/101",
    id: 1,
    title: "produto A",
    price: "125.50",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus laboriosam nemo sit autem veniam sunt a ullam iure inventore soluta consequatur molestias odio impedit corrupti maxime nulla deserunt, est necessitatibus.",
    date: "12/12/2022"
},
{
    image: "https://picsum.photos/101/101",
    id: 22,
    title: "produto B",
    price: "98.50",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus laboriosam nemo sit autem veniam sunt a ullam iure inventore soluta consequatur molestias odio impedit corrupti maxime nulla deserunt, est necessitatibus.",
    date: "13/01/2023"
},
]


export default function page(){
    const [option, setOption] = useState(0)
    return(
        <>
            <AdminNav value="rel_button"></AdminNav>
            <div className="line padding3h">
                <div>
                    <button className="btnWhite" onClick={()=>setOption(1)}>
                        <BsPerson></BsPerson>
                        Perfil
                    </button>
                </div>
                <div>
                    <button className="btnWhite" onClick={()=>setOption(2)}>
                        <BsAward/>
                        Categorias
                    </button>
                </div>
                <div>
                    <button className="btnWhite" onClick={()=>setOption(3)}>
                        <BsBox/>
                        Produtos
                    </button>
                </div>
            </div>
            {option==1 && (
                <div className="centralizeCol">
                    <div className="pinkBox centralizeCol">
                        <input className="pinkInput" type="text" placeholder="nome" />
                        <input className="pinkInput" type="text" placeholder="username" />
                        <input className="pinkInput" type="text" placeholder="email" />
                        <input className="pinkInput" type="password" placeholder="password" />
                        <button className="btnWhite">Salvar alterações</button>
                        <button className="btnRed">Apagar conta</button>
                    </div>
                </div>
            )}
            {option==2 && (
                <div className="centralizeCol">
                    {categories.map((category)=>(
                        <div className="line productItem centralize">
                            <h3>{category.name}</h3>
                            <h3>{category.id}</h3>
                            <BsPencilSquare className="filter"/>
                            <BsTrash3 className="filter"/>
                        </div>
                    ))}
                </div>
            )}
            {option==3 && (
                <div className="centralizeCol">
                    {products.map((item)=>(
                        <div className="line productItem centralize">
                            <img src={item.image} alt="" />
                            <h3>{item.title}</h3>
                            <h3>{item.id}</h3>
                            <BsPencilSquare className="filter"/>
                            <BsTrash3 className="filter"/>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}