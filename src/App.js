
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navar from './Components/Navar';
import Home from './Routes/Home';
import Cursos from './Routes/Cursos';
import Blog from './Routes/Blog';
import Servicios from './Routes/Servicios';
import Productos from './Routes/Productos';
import DetalleCurso from './Routes/DetalleCurso';
import BlogView from './Routes/BlogView';

function App() {
  
  return (<>
    <Navar/>
    <h1 className="H1Bing">Servicios de topografia, geomaticas , fotogrametria y sistemas de informacion geografica UMSA</h1>
    <main  className="body">
    <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="/Cursos" element={<Cursos/> } />
      <Route path="/Cursos/:id" element={<DetalleCurso/> } />      
      <Route path="/Servicios" element={<Servicios/> } />
      <Route path="/Blog" element={<Blog/> } />
      <Route path="/Servicio/:Service_id" element={<BlogView/>} />
      <Route path="/Productos/:producto_id" element={<Productos/> } />
      <Route path="/Productos/" element={<Productos/> } />
    </Routes>
    </main>
    <Footer></Footer>

  </>  
  );
}

export default App;
