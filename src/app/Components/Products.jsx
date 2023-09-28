import '../Styles/Pages.css'
import '../Styles/Products.Modules.css'
import { BsFillCartPlusFill } from "react-icons/bs";
import Link from 'next/link';

const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '/carrinho',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
        id: 3,
        name: 'Advanced Tee',
        href: '/carrinho',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$78',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Unbeliable Tee',
        href: '/carrinho',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$135',
        color: 'Black',
      },

  ]

export default function Products(props){
    return (
        <section className="bg-white" id='productsContainer'>
            <div className='padding3h'>
                <h2>Confira nossos produtos:</h2>
                <div className='productInnerContainer'>
                {products.map((product) => (
                    <div className='productCard'>
                        <img src={product.imageSrc} alt={product.imageAlt}/>
                        <div>
                            <h3>{product.name}</h3>
                            <h4>{product.price}</h4>
                        </div>
                        <Link href={product.href}>
                            <button className='btnWhite'>
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
