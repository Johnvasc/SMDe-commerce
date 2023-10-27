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
    ///useStaes de Produto
    const [nomeProduto, setNomeProd] = useState('')
    const [precoProduto, setPrecoProd] = useState('')
    const [qtdeProduto, setQtdeProd] = useState('')
    const [descricaoProduto, setDescProd] = useState('')
    const [categoriaProduto, setCatProd] = useState('')
    const [urlProduto, setUrlProd] = useState('')
    ///useStates de Categoria
    const [urlCategoria, setUrlCat] = useState('')
    const [nomeCategoria, setNomeCat] = useState('')
    ///useStates de Promocao
    const [nomePromocao, setNomePromo] = useState('')
    const [urlPromocao, setUrlPromo] = useState('')
    const [descricaoPromocao, setDescPromo] = useState('')
    const [iniPromocao, setIniPromo] = useState('')
    const [fimPromocao, setFimPromo] = useState('')
    const [repPromocao, setRepPromo] = useState(false)


    async function newProduct(){
        const data = {name: nomeProduto, category: categoriaProduto, description: descricaoProduto, imageUrl: urlProduto, qtdeStock: qtdeProduto, price: precoProduto}
        console.log(data)
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
        try{
            const response = await fetch('http://localhost:8080/newProduct', options)
            const data = await response.json();
            console.log(data.msg)
            if(response.status===200) window.location.href = '/dashboard'
        }catch(error){
            console.error('Erro:', error);
        }

    }
    async function newCategory(){
        const data = {name: nomeCategoria, imageUrl: urlCategoria}
        console.log(data)
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
        try{
            const response = await fetch('http://localhost:8080/newCategory', options)
            const data = await response.json();
            console.log(data.msg)
            if(response.status===200) window.location.href = '/dashboard'
        }catch(error){
            console.error('Erro:', error);
        }

    }
    async function newPromotion(){
        const data = {name: nomePromocao, imageUrl: urlPromocao, repeat: repPromocao, beggining: iniPromocao, closure: fimPromocao, description: descricaoPromocao, name: nomePromocao}
        console.log(data)
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
        try{
            const response = await fetch('http://localhost:8080/newPromotion', options)
            const data = await response.json();
            console.log(data.msg)
            if(response.status===200) window.location.href = '/dashboard'
        }catch(error){
            console.error('Erro:', error);
        }

    }
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
                        <input type="text" placeholder="Nome do Produto" value={nomeProduto} onChange={(e)=>{setNomeProd(e.target.value)}}/>
                        <input type="number" placeholder="Preço" value={precoProduto} onChange={(e)=>{setPrecoProd(e.target.value)}}/>
                        <input type="number" placeholder="nº da categoria" value={categoriaProduto} onChange={(e)=>{setCatProd(e.target.value)}}/>
                        <input type="number" placeholder="Qtd em Estoque" value={qtdeProduto} onChange={(e)=>{setQtdeProd(e.target.value)}} />
                        <input type="text" placeholder="Link da imagem" value={urlProduto} onChange={(e)=>{setUrlProd(e.target.value)}}/>
                        <textarea name="" placeholder="descrição" id="" cols="30" rows="10" value={descricaoProduto} onChange={(e)=>{setDescProd(e.target.value)}}></textarea>
                        <button className="btnWhite" onClick={()=>newProduct()}>Adicionar</button>
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
                        <input type="text" placeholder="Nome da categoria" value={nomeCategoria} onChange={(e)=>{setNomeCat(e.target.value)}}/>
                        <input type="text" placeholder="Link da imagem" value={urlCategoria} onChange={(e)=>{setUrlCat(e.target.value)}}/>
                        <button className="btnWhite" onClick={()=>newCategory()}>Adicionar</button>
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
                        <input type="text" placeholder="Nome da promoção"  value={nomePromocao} onChange={(e)=>{setNomePromo(e.target.value)}}/>
                        <input type="text" placeholder="Imagem" value={urlPromocao} onChange={(e)=>{setUrlPromo(e.target.value)}}/>
                        <p>Início:</p>
                        <input type="date" placeholder="formato aaaa-mm-dd"  value={iniPromocao} onChange={(e)=>{setIniPromo(e.target.value)}}/>
                        <p>Fim:</p>
                        <input type="date" placeholder="formato aaaa-mm-dd" value={fimPromocao} onChange={(e)=>{setFimPromo(e.target.value)}}/>
                        <p>Promoção sazonal:</p>
                        <input type="checkbox" name="" id="" onClick={()=>setRepPromo(!repPromocao)}/>
                        <textarea name="" id="" cols="30" rows="10" placeholder="texto da promoção!" value={descricaoPromocao} onChange={(e)=>{setDescPromo(e.target.value)}}></textarea>
                        <button className="btnWhite" onClick={()=>newPromotion()}>Adicionar</button>
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