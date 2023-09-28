import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import '../Styles/pages.css'
import '../Styles/signin.Modules.css'

function page(){
    return(
        <>
            <Navbar/>
            <main id="cartBody" className='padding3h'>
                <h2>Seu carrinho:</h2>
                <hr/>
                <section>
                </section>
                <h3>Subtotal: 1500R$</h3>
                <div>
                    <button>Comprar</button>
                </div>           
            </main>   
            <Footer/> 
        </>
    )
}
export default page