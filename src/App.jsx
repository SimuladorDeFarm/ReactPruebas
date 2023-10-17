import React from 'react';
import './App.css';
import miImagen from './juan carlos bodoque.jpg'

function App() {
  const backgroundImage = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/fondoWeb3.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };


  
  return (

    <div className="App" style={backgroundImage}>

     
        <div className='cabecera'>
          
          <div className='img-cabecera'>
            <img src={miImagen} alt="Mi Imagen" className="mi-imagen" />
          </div>
          
          <div className='titulo'>
            <h1>31 Minutos</h1>
          </div>

        </div>
         
    
      
      <div className='BarraLinks'>
        <button className='button1'>
          Button1
          
        </button>
 
      </div>

      <div className="Right_div">
        <h1>Tu Título</h1>
        <p>este es mi parrafo que estoy escribiendo en este momento</p>
      </div>
    </div>
  );
}

export default App;