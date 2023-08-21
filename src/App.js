import React from 'react';
import './App.css';

const frasesData = [
  {text: "El misterio de la vida no es un problema a resolver, sino una realidad a experimentar", autor: "Duna, Frank Herbert"},
  {text: "Estar solo no tiene nada que ver con cuantas personas hay alrededor", autor: "Richard Yates"},
  {text: "Sea un hombre o sea más que un hombre. Sea firme con su propósito y firme como una piedra", autor: "Frankestein, Mary Shelley"},
  {text: "El hombre débil se vuelve fuerte cuando no tiene nada, porque sólo entonces puede sentir la locura de la desesperación", autor: "Arthur Conan Doyle"},
  {text: "Si buscas la perfección nunca estarás contento", autor: "Leo Tolstoy"},
  {text: "Llamo a la gente “rica” cuando son capaces de satisfacer las necesidades de su imaginación", autor: "Henry James"},
  {text: "El sol es débil cuando se eleva primero, y cobra fuerza y coraje a medida que avanza el día", autor: "Charles Dickens"},
  {text: "Es en las noches de diciembre, cuando el termómetro está a cero, cuando más pensamos en el sol", autor: "Victor Hugo"},
  {text: "Mi consejo es: nunca hagas mañana lo que puedes hacer hoy. La procrastinación es la ladrona del tiempo", autor: "David Copperfield"},
  {text: "La mente hace su propio lugar, y en sí misma puede hacer un cielo del infierno, y un infierno del cielo", autor: "John Milton"},
];

const coloresData = [ "#BDBB99", "#F39C12", "#16A085", "#FB6964", "#2C3E50", "#342224", "#BD5A9D", "#5ABD7A", "#5A89BD", "#EFA881", "#A06C14"];

const Contenedor = ( {frases, nuevaFrase, color, opacity} ) => {
  const urlTwitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${frases.text}" - ${frases.autor} #Frases`)}`;

  return (
    <div>
        <div id="quote-box">
          <div className="contenedor-frase">
             <div id="text" style={{ color: color, opacity: opacity }}>
                <i className="fa fa-quote-left"></i>
                <p className="frase">{frases.text}</p>
              </div>

              <div id="author" style={{ color: color, opacity: opacity }}>
                <p className="autor">- {frases.autor}</p>
               </div>
            </div>

            <div className="botones">
              <a 
                href={urlTwitter}
                id="tweet-quote" 
                target="_blank" 
                rel="noopener noreferrer">
                  <i className="fa-brands fa-square-x-twitter" style={{ color: color }}></i>
              </a>

              <button
                className="boton"
                id="new-quote"
                onClick={nuevaFrase}
                style={{ backgroundColor: color }}
                >
                Nueva frase
              </button>
            </div>
            </div>
            <div className="derechos">
                <a 
                href="https://jpdev.site"
                target="_blank" 
                rel="noopener noreferrer">
                  <img className="logo" src="https://i.ibb.co/khRv85Y/logo2.png" alt="logo" border="0" />
                </a>
            </div>
    </div>
)}

const indexRandom = (event) => {
 return Math.floor(Math.random() * event.length);
}

const App = () => {
 const [frases, setFrases] = React.useState(frasesData[indexRandom(frasesData)])
 const [color, setColor] = React.useState(coloresData[indexRandom(coloresData)]);
 const [opacity, setOpacity] = React.useState(1);


const changeColor = () => {
  const newColor = coloresData[indexRandom(coloresData)];
  setColor(newColor);
  document.body.style.backgroundColor = newColor;
}


 const nuevaFrase = () => {
// Primero reducimos la opacidad a 0
setOpacity(0);

// Luego, después de una pausa (para que la transición se complete), cambiamos la frase y restablecemos la opacidad a 1
setTimeout(() => {
  changeColor();
  setFrases(prevFrases => {
    let newFrase;
    do {
      newFrase = frasesData[indexRandom(frasesData)];
    } while (newFrase === prevFrases);
    return newFrase;
  });
  setOpacity(1);
}, 500);
};

 
  return (
    <div className="main">
     <Contenedor frases={frases} nuevaFrase={nuevaFrase} color={color} opacity={opacity} />
    </div>
  )
}

export default App;
