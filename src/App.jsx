
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navar from './Components/Navar';
import Home from './Routes/Home';
import Cursos from './Routes/Cursos';
import Blog from './Routes/Blog';
import Servicios from './Routes/Servicios';
import Productos from './Routes/Productos';
import ProductCatalog from './Components/product/ProductCatalog'
import DetalleCurso from './Routes/DetalleCurso';
import BlogView from './Routes/BlogView';
import WhatsAppFloat from './Components/WhatsAppFloat';

function App() {

  return (<>
    <Navar />
    <WhatsAppFloat />
    <main className="body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/cursos/:id" element={<DetalleCurso />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/servicio/:service_id" element={<BlogView />} />
        <Route path="/productos/:producto_id" element={<Productos />} />
        <Route path="/productos/:title" element={<ProductCatalog />} />
        <Route path="/productos/" element={<Productos />} />
      </Routes>
    </main>
    <Footer></Footer>

  </>
  );
}

export default App;
