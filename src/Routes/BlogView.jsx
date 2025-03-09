import { IconButton } from "@mui/material";
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import { useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom"
import BoxBack from "../Components/BoxBack";
import Fotogrametria from "../Components/Services/Fotogrametria";
import Topografia from "../Components/Services/Topografia";
import Geodesia from "../Components/Services/Geodesia";
import Sig from "../Components/Services/Sig";
export default function BlogView(params) {
    const { Service_id } = useParams();

    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [])
    let Layout = () => <div></div>;
    if (Service_id == 'FOTOGRAMETRÍA') {
        Layout = Fotogrametria;
    }

    if (Service_id == 'TOPOGRAFÍA') {
        Layout = Topografia;
    }

    if (Service_id == 'GEODESIA') {
        Layout = Geodesia;
    }

    if (Service_id == 'SIG') {
        Layout = Sig;
    }

    return (
        <main>
            <BoxBack></BoxBack>
            {/* <p>Servicio </p> */}
            <h2 style={{ textAlign: 'center' }} >{Service_id}</h2>
            {/* <span style={{ textAlign: 'center' }}>Pagina en construcion</span> */}
            <Layout />
        </main >
    )
}

