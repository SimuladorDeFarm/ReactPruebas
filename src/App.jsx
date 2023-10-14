import React from 'react';
import './App.css';

function App() {
  const backgroundImage = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/fondoWeb3.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <body className="App" style={backgroundImage}>
      <div className="Right_div">
        <h1>Tu Título</h1>
        <p>este es mi parrafo que estoy escribiendo en este momento</p>
      </div>
    </body>
  );
}

export default App;