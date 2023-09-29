"use client"
import {BsChevronRight} from "react-icons/bs"
import {BsChevronLeft} from "react-icons/bs"
import { useState } from "react"
import '../Styles/Slider.Modules.css'

export default function Slider({images, texts}){
    const [imageSrc, setSrc] = useState(images[0])
    const [textSrc, setTSrc] = useState(texts[0])
    const [count, setCount] = useState(0)
    
    function setSliderContent(index, sliderSize){
        let newCount = count + index
        if (newCount === -1) newCount = sliderSize - 1
        else if (newCount === sliderSize) newCount = 0
        setCount(newCount)
        setSrc(images[newCount])
        setTSrc(texts[newCount])
    }

    return(
        <div id="sliderContainer">
            <img src={imageSrc} id="sliderImage"/>
            <div id="slideView">
                <BsChevronLeft className="slideArrow" onClick={()=>{
                    setSliderContent(-1, images.length)
                }}/>
                <BsChevronRight className="slideArrow" onClick={()=>{
                    setSliderContent(+1, images.length)
                }}/>
            </div>
            <div id="slideText">
                <h3>
                    {textSrc}
                </h3>
            </div>
        </div>
    )    
}