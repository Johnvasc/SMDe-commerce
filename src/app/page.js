import Navbar from "./Components/Navbar"
import Products from "./Components/Products"
import Footer from "./Components/Footer"
import Slider from "./Components/Slider"

export default function Home() {
  const img = ['https://picsum.photos/1200/400', 'https://picsum.photos/1200/401', 'https://picsum.photos/1200/402']
  const text = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ut? Debitis unde praesentium magnam esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ut? Debitis unde praesentium magnam esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ut? Debitis unde praesentium magnam esse?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ut? Debitis unde praesentium magnam esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ut?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ut? Debitis unde praesentium magnam esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ut? Debitis unde praesentium magnam esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ut?']
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Navbar></Navbar>
        <Slider images={img} texts={text}></Slider>
        <Products></Products>
        <Footer></Footer>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </main>    
    </>

  )
}
