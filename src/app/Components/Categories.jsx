"use client"
import "../Styles/Pages.css"
import "../Styles/Slider.Modules.css"
import {BsChevronRight} from "react-icons/bs"
import {BsChevronLeft} from "react-icons/bs"

export default function Categories({categories}){
    return(
        <section className="padding3h">
            <h2>Busque por categoria:</h2>
            <div id="categorySlider">
                {categories.map((category)=>(
                    <div className="categoryItem">
                        <img src={category.image} alt="" className="categoryPic"/>
                        <h3>{category.title}</h3>
                    </div>
                ))}
           </div>
        </section>
    )
}