import React from "react";
import { chips } from "./Photos";
import { Link } from "react-router-dom";



const Chips = () => {
    return (
        <div className="container">
        <div className="row">
            <div style={{textAlign: "center"}}className="col-12">
                <h2>You Want Some Chips?</h2>
            </div>
            <div className="col-12">
              { chips.map(chip =><img class="col-3 m-1 img-thumbnail" src={chip.value}></img>)}
            </div>
        </div>
        <Link to="/">Go Back</Link>
    </div>
    )
}





export default Chips;