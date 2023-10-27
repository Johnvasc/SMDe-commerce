"use client"
import {BsChevronRight} from "react-icons/bs"
import {BsChevronLeft} from "react-icons/bs"
import { useState } from "react"
import '../Styles/Slider.Modules.css'

export default function Slider({promotions}){
    const [imageSrc, setSrc] = useState(promotions[0].Image)
    const [textSrc, setTSrc] = useState(promotions[0].description)
    const [titleSrc, setTitleSrc] = useState(promotions[0].Name)
    const [iniSrc, setIniSrc] = useState(promotions[0].Beggining)
    const [fimSrc, setFimSrc] = useState(promotions[0].Closure)
    const [count, setCount] = useState(0)
    
    function setSliderContent(index, sliderSize){
        let newCount = count + index
        if (newCount === -1) newCount = sliderSize - 1
        else if (newCount === sliderSize) newCount = 0
        setCount(newCount)
        setSrc(promotions[newCount].Image)
        setTSrc(promotions[newCount].description)
        setTitleSrc(promotions[newCount].Name)
        setIniSrc(promotions[newCount].Beggining)
        setFimSrc(promotions[newCount].Closure)
    }

    return(
        <div id="sliderContainer">
            <img src={imageSrc} id="sliderImage"/>
            <div id="slideView">
                <BsChevronLeft className="slideArrow" onClick={()=>{
                    setSliderContent(-1, promotions.length)
                }}/>
                <BsChevronRight className="slideArrow" onClick={()=>{
                    setSliderContent(+1, promotions.length)
                }}/>
            </div>
            <div id="slideText">
                <h2>{titleSrc}</h2>
                <h3>
                    {textSrc}
                </h3>
                <p>obs: valida somente de: {iniSrc} até {fimSrc}.</p>
            </div>
        </div>
    )    
}