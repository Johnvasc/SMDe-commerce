"use client"
import {BsChevronRight} from "react-icons/bs"
import {BsChevronLeft} from "react-icons/bs"
import { useState } from "react"
import '../Styles/Slider.Modules.css'

export default function Slider({images, texts}){
    const [imageSrc, setSrc] = useState(images[0])
    const [textSrc, setTSrc] = useState(texts[0])
    const [count, setCount] = useState(0)
    function slides(){
        
    }
    return(
        <div id="sliderContainer">
            <img src={imageSrc} id="sliderImage"/>
            <div id="slideView">
                <BsChevronLeft className="slideArrow" onClick={()=>{
                    if(count==0) setCount(2)
                    else setCount(count--)
                    console.log(count)
                    setSrc(images[count])
                    setTSrc(texts[count])
                }}/>
                <BsChevronRight className="slideArrow" onClick={()=>{
                    if(count==(2)) setCount(0)
                    else setCount(count++)
                    console.log(count)
                    setSrc(images[count])
                    setTSrc(texts[count])
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