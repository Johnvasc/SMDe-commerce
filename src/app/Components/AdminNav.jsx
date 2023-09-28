import "../Styles/Pages.css"
import { useState } from "react"
import {BsFileEarmarkSpreadsheet} from "react-icons/bs"
import {BsPerson} from "react-icons/bs"
import {BsDoorOpen} from "react-icons/bs"
import Link from 'next/link';

export default function AdminNav(props){
    const[buttonStatus, setButton] = useState(props.value)
    return(
        <nav>
            <div className="line centralize">
                <h1>Bem-vindo, Admin!</h1>
                <div>
                    {buttonStatus=="rel_button" && (
                        <Link href="/dashboard">
                            <BsFileEarmarkSpreadsheet className="filter margin3h"/>
                        </Link>                     
                    )}
                    {buttonStatus=="prof_button" && (
                        <Link href="/marketplace">
                            <BsPerson className="filter margin3h"/>
                        </Link>
                    )}
                    <Link href="/">
                        <BsDoorOpen className="filter margin3h" onClick={()=>{window.confirm("deseja efetuar logout?")}}/>    
                    </Link>
  
                </div>
      
            </div>
            <hr/>
        </nav>
    )
}