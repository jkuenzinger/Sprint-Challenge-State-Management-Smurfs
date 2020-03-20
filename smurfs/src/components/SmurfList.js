import React from 'react';
import Smurf from './Smurf';

export default function(props) {
    return(
        <div>
            {props.smurfs.map(smurfletons => (
                <Smurf id={smurfletons.id} key={smurfletons.id} name={smurfletons.name} age={smurfletons.age} height={smurfletons.height}/>
            ))}
        </div>
    )
}