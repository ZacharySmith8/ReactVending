import React from 'react';
import { sodas } from './Photos';
import { Link } from "react-router-dom";




const Soda = () => { 
   
   
    return (
        <div className="container">
            <div className="row">
                <div style={{textAlign: "center"}}className="col-12">
                    <h2>Grab A Cold 1</h2>
                </div>
                <div className="col-12">
                  { sodas.map(soda =><img class="col-3 m-1 img-thumbnail" src={soda.value}></img>)}
                </div>
            </div>
            <Link to="/">Go Back</Link>
        </div>
    )
}




export default Soda;