import React from 'react';
import PropTyps from 'prop-types';


const PrimeraApp = ({saludo, subtitulo }) => {

 
    
    
    return(
        <>
            <h1>{saludo}</h1>
             {/* <pre> { JSON.stringify( saludo,null,3) } </pre> */}
            <p>{subtitulo}</p>
        </>
    );
    
   
}

PrimeraApp.PropTyps={

    saludo:PropTyps.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;