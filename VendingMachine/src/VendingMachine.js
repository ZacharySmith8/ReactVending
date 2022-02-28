import React from "react"
import { Link } from "react-router-dom";

const VendingMachine = () => {

    
    return (
        <>
        <h1>Vending Machine</h1>

        <div>
            <Link to="/chips">Chips</Link>
            
            <br></br>
            <Link to="/soda">Soda</Link>
        </div>
        </> 
    )
}






export default VendingMachine; 