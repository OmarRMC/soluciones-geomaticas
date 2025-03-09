import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";


function UseObserver(options) {

    const [elemento , setElemento] = useState([]);
    const [entries , setEntries] = useState([]);

    const observer = useRef(new IntersectionObserver(function(entradas, ok){        
        setEntries(entradas); 
    }, options))

    useEffect(()=>{
        const currentObserver = observer.current; 
        currentObserver.disconnect();
        
        if (elemento.length > 0 ) {
            elemento.forEach(e => currentObserver.observe(e))
        }
        return ()=>{
            if (currentObserver) {
                currentObserver.disconnect(); 
            }
        }
    }, [elemento]); 



    return ( [observer.current , setElemento , entries]);
}

export default UseObserver;