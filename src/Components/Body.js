import React from "react";
import './Body.css';

function Body(props)
{
    return(
        <div>
            {props.Texto1}
            {props.numero}
            {JSON.stringify(props.booleano)}
            {
                props.arreglo.map((e,index)=>
                <h1 key={index}>{e}-</h1> 
                )
            }          
            {props.etiqueta}
        </div>
    );
}

export default Body;