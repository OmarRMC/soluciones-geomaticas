import style from '../css/ProductoDiana.module.css'

import diana from '../Assets/img/productos/Diana.JPG'

export default function ProductosDiana() {
    return (
        <main className={style.containerProducto}>

            <h4>Diana para dron </h4>
            <div className={style.contanierImg}>
                <img src={diana} alt='' className={style.image}></img>
            </div>
            <section>
                <h5>¿Qué Son Las Dianas ?</h5>
                Las dianas son objetos colocados en tierra o en algunos casos marcada con pintura, generalmente con coordenadas ya conocidas.

                Las dianas pueden estar hechos de cualquier material (láminas de plástico, lonas, etc.) considerar que sea de color de alto contraste

                Tener en cuenta el color, forma y el material de las dianas, en función a las características geográficas del lugar en donde se realiza el mapeo aéreo, lo que se busca es que sea identificable en las fotografías tomadas con el Dron.
            </section>
            <section>
                <h5>¿Que Importancia Tienen las Dianas ?</h5>
                En un Levantamiento Topográfico Apoyado con dron, los GCP son puntos con coordenadas conocidas establecidos con precisión por profesionales Topógrafos y Geodestas, de esa manera garantizando precisión planimétrica (X, Y) y altimétrica (Z).

                Entonces, se colocan las dianas en suelo, hacer coincidir exactamente con el punto materializado o señalados (GCP), esto nos permite georreferenciar las fotografías de manera correcta o en otra palabra posicionar correctamente.

                Durante el procesamiento de las fotografías son usadas los GCP (Coordenadas en tierra), con las herramientas de Software se agregan las coordenadas (Geodésicas o UTM) en la fotografía señalada. Esto se relacionan entre el sistema de coordenadas de la fotografía y el sistema de coordenadas del terreno. Este proceso que se realiza ayuda llevar con precisión los productos finales.

                Sin embargo, no todos los vuelos requieren del uso de dianas, en especial aquellos vuelos en los que no sean necesarias mediciones precisas (estudio ambiental, usos de Suelo, vegetación, ect.), Pero si en caso de que estamos buscando productos de componente geométrica (topografía, catastro, arqueología, etc.) requieren del uso de dianas estrictamente.

                Cuando el levantamiento fotogramétrico no es georreferenciado, produce desplazamiento de su posición verdadera en los componentes X, Y y Z o Ser deformados en escala. A sí que este tipo de levantamiento no es recomendable para realizar mediciones ni cálculo de volúmenes.
            </section>
        </main>

    );
}