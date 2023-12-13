import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MenuPrincipal } from './components/MenuPrincipal';  
import { Servicios } from './pages/Servicios';
import { InfoPac } from './pages/InfoPac';
import { ImageCarousel } from './components/ImageCarousel';
import {Novedades} from './pages/Novedades';
import { Somos } from './pages/Somos';
import { Contactos } from './pages/Contactos';
import { Historia } from './pages/Historia';
import { ExtComuni } from './pages/ExtComuni';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<MenuPrincipal/>}>
            <Route path='/' Component={ImageCarousel}/>
            <Route path='servicios' element={<Servicios/>} />
            <Route path='infoPac' element={<InfoPac/>}/>
            <Route path='novedades' element={<Novedades/>}/>

            <Route path='somos' element={<Somos/>}/>
            <Route path='historia' element={<Historia/>} />

            <Route path='extencion' element={<ExtComuni/>} />

            <Route path='contactos' element={ <Contactos/> }/>
        </Route>
      </Routes> 
    </div>

      
  );
}

export default App;
