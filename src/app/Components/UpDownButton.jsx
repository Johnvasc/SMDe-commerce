"use client"
import { useState } from "react"
import {BsSortNumericDown} from "react-icons/bs"
import {BsSortNumericUpAlt} from "react-icons/bs"

export default function UpDownButton(props){
    const [filterStatus, setFilter] = useState(false)
    return(
        <>
            {filterStatus && (
                <BsSortNumericUpAlt className="filter" onClick={()=>setFilter(false)}/>
            )}
            {!filterStatus && (
                <BsSortNumericDown className="filter" onClick={()=>setFilter(true)}/>
            )}
        </>
    )
}