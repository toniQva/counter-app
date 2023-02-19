import React from 'react';
import PropTyps from 'prop-types';


const PrimeraApp = ({saludo }) => {

 
    
    
    return(
        <>
            <h1>{saludo}</h1>
             {/* <pre> { JSON.stringify( saludo,null,3) } </pre> */}
            <p>Mi primera aplicacion</p>
        </>
    );
    
   
}

PrimeraApp.PropTyps={

    saludo:PropTyps.string.isRequired
}


export default PrimeraApp;