import imgDrone from "../Assets/img/productos/Mavic3Classic.jpg";
import imgDiana from "../Assets/img/productos/dianas.png";
import imgLandingPad from "../Assets/img/productos/landingPad.webp";
const products = [
    {
        title: "Drones DJI",
        image: imgDrone,
        description: "Venta de drones",
        // tags: ["Mavic 2 Pro", "Phantom 4 Pro", "Mavic 3 Enterprise"],
        catalog: [
            { name: "Mavic 2 Pro", price: "$1,500" },
            { name: "Phantom 4 Pro", price: "$1,800" },
            { name: "Mavic 3 Enterprise", price: "$2,500" },
        ],
    },
    {
        title: "Dianas",
        image: imgDiana,
        description: "Para que tú Mapeo sea Georreferenciado, tenemos diferentes tamaños de Dianas.",
        catalog: [
            { name: "Diana 50cm", price: "$50" },
            { name: "Diana 100cm", price: "$80" },
        ],
    },
    {
        title: "Landing Pad",
        image: imgLandingPad,
        description: "Pista de aterrizaje de drones",
        catalog: [
            { name: "Landing Pad 75cm", price: "$30" },
            { name: "Landing Pad 110cm", price: "$45" },
        ],
    },
];


export { products }