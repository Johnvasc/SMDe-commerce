import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import '../Styles/pages.css'
import '../Styles/signin.Modules.css'
import ProductOnCart from '../Components/ProductOnCart'


const products = [{
    image: "https://picsum.photos/60/60",
    qtde: "3",
    name: "Standard product",
    price: 12.50
},{
    image: "https://picsum.photos/62/62",
    qtde: "1",
    name: "Foda product",
    price: 65.50
}
]

function page(){
    return(
        <>
            <Navbar/>
            <main id="cartBody" className='padding3h'>
                <h2>Seu carrinho:</h2>
                <hr/>
                <section>
                    {products.map((product)=>(
                        <ProductOnCart name={product.name} image={product.image} price={product.price} qtde={product.qtde}/>
                    ))}
                </section>
                <h3>Subtotal: 1500R$</h3>
                <div>
                    <button className='btnWhite'>Comprar</button>
                </div>           
            </main>   
            <Footer/> 
        </>
    )
}
export default page