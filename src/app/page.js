import Navbar from "./Components/Navbar"
import Products from "./Components/Products"
import Footer from "./Components/Footer"
import Slider from "./Components/Slider"
import Categories from "./Components/Categories"

export default function Home() {
  const img = ['https://picsum.photos/1200/400', 'https://picsum.photos/1200/401', 'https://picsum.photos/1200/402']
  const text = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ut? Debitis unde praesentium magnam esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ut? Debitis unde praesentium magnam esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ut? Debitis unde praesentium magnam esse?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ut? Debitis unde praesentium magnam esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ut?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ut? Debitis unde praesentium magnam esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ut? Debitis unde praesentium magnam esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ut?']
  const cate = [{
    image: "https://picsum.photos/400/400",
    title: "Limpeza"
  },{
    image: "https://picsum.photos/401/401",
    title: "Eletrônicos"
  },{
    image: "https://picsum.photos/402/402",
    title: "Roupas"
  },{
    image: "https://picsum.photos/403/403",
    title: "Livros"
  }]
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Navbar></Navbar>
        <Slider images={img} texts={text}></Slider>
        <Products></Products>
        <Categories categories={cate}></Categories>
        <Footer></Footer>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </main>    
    </>

  )
}
