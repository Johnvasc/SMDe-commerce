"use client"

import '../Styles/Pages.css'
import '../Styles/Products.Modules.css'
import { BsFillCartPlusFill } from "react-icons/bs";
import Link from 'next/link';
import { useState } from 'react';
import { useEffect } from 'react';


export default function Products({products}){
    return (
        <section className="bg-white" id='productsContainer'>
            <div className='padding3h'>
                <h2>Confira nossos produtos:</h2>
                <div className='productInnerContainer'>
                {products.map((product) => (
                    <div className='productCard' key={product.id}>
                        <img src={product.Image} alt="" />
                        <div className='line'>
                            <h3>{product.Name}</h3>
                            <h3> - </h3>
                            <h4>{product.Price} R$</h4>
                        </div>
                        <Link href={`/myproduct?product=${product.ID}`}>
                            <button>
                                <BsFillCartPlusFill/>
                            </button>                        
                        </Link>
                            
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}
