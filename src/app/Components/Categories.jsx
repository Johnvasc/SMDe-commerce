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
                    <div key={category.ID} className="categoryItem">
                        <img src={category.Image} alt="" className="categoryPic"/>
                        <h3>{category.Name}</h3>
                    </div>
                ))}
           </div>
        </section>
    )
}