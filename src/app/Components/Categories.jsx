"use client"
import "../Styles/Pages.css"
import "../Styles/Slider.Modules.css"
import {BsChevronRight} from "react-icons/bs"
import {BsChevronLeft} from "react-icons/bs"

export default function Categories(){
    return(
        <section className="padding3h">
            <h2>Busque por categoria:</h2>
            <div id="categorySlider">
                <BsChevronLeft className="slideArrow"/>
                <div className="categoryItem">
                    <img src="https://picsum.photos/400/400" alt="" className="categoryPic"/>
                    <h3>Roupas</h3>
                </div>
                <div className="categoryItem">
                    <img src="https://picsum.photos/400/400" alt="" className="categoryPic"/>
                    <h3>Eletronicos</h3>
                </div>
                <div className="categoryItem">
                    <img src="https://picsum.photos/400/400" alt="" className="categoryPic"/>
                    <h3>Cosméticos</h3>
                </div>
                <BsChevronRight className="slideArrow"/>
            </div>
        </section>
    )
}