import { useEffect } from "react";
import Loading from "../Components/Loading";
import { useParams , useNavigate, useSearchParams } from "react-router-dom"
import ProductosDiana from "../Components/ProductoDiana";

function Productos() {
    const {producto_id}=useParams();
    useEffect(()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;    
        
    },[])
    return ( <>
    {producto_id=='Diana'?<ProductosDiana/>:<Loading/>}
    
    </> );
}

export default Productos;