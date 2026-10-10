
import './App.css';
import { Suspense } from 'react';
import { matchRoutes, useRoutes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navar from './Components/Navar';
import WhatsAppFloat from './Components/WhatsAppFloat';
import Loading from './Components/Loading';
import lazyWithPreload from './utils/lazyWithPreload';

// Cada página se descarga solo cuando se visita
const Home = lazyWithPreload(() => import('./Routes/Home'));
const Cursos = lazyWithPreload(() => import('./Routes/Cursos'));
const Blog = lazyWithPreload(() => import('./Routes/Blog'));
const Servicios = lazyWithPreload(() => import('./Routes/Servicios'));
const Productos = lazyWithPreload(() => import('./Routes/Productos'));
const ProductCatalog = lazyWithPreload(() => import('./Components/product/ProductCatalog'));
const DetalleCurso = lazyWithPreload(() => import('./Routes/DetalleCurso'));
const BlogView = lazyWithPreload(() => import('./Routes/BlogView'));
const BlogArticle = lazyWithPreload(() => import('./Routes/BlogArticle'));
const NotFound = lazyWithPreload(() => import('./Routes/NotFound'));

const routes = [
  { path: '/', Component: Home },
  { path: '/cursos', Component: Cursos },
  { path: '/cursos/:id', Component: DetalleCurso },
  { path: '/servicios', Component: Servicios },
  { path: '/blog', Component: Blog },
  { path: '/blog/:slug', Component: BlogArticle },
  { path: '/servicio/:service_id', Component: BlogView },
  { path: '/productos/catalogo/:title', Component: ProductCatalog },
  { path: '/productos/:producto_id', Component: Productos },
  { path: '/productos/', Component: Productos },
  { path: '*', Component: NotFound },
].map(({ path, Component }) => ({ path, element: <Component />, preload: Component.preload }));

// Descarga la página de la URL actual antes de montar React (ver index.jsx), para que
// el HTML prerenderizado no se reemplace por el <Loading /> mientras llega el chunk
export function preloadRoute(pathname) {
  const match = matchRoutes(routes, pathname);
  return match ? match[match.length - 1].route.preload() : Promise.resolve();
}

function App() {
  const element = useRoutes(routes);

  return (<>
    <Navar />
    <WhatsAppFloat />
    <main className="body">
      <Suspense fallback={<Loading />}>
      {element}
      </Suspense>
    </main>
    <Footer></Footer>

  </>
  );
}

export default App;
