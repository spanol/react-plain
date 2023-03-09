import { useState } from "react";
import "./index.css";
// Crie um programa que ao clicar na tela, desenhe um ponto na tela. Ao clicar em um botão, limpe a tela. Ao clicar em outro botão, volte o último ponto desenhado.
export default function App() {
  const [dots, setDots] = useState([]);

  const handleClick = (event) => {
    const { clientX, clientY } = event;
    setDots([...dots, { x: clientX, y: clientY }]);
  };

  const clearDots = (e) => {
    e.stopPropagation();
    setDots([]);
  };

  const back = (e) => {
    e.stopPropagation();
    const newDots = [...dots];
    newDots.pop();
    setDots(newDots);
  };

  const renderDots = () => {
    return dots.map((dot, index) => {
      return (
        <div
          className="dot"
          key={index}
          style={{
            top: dot.y,
            left: dot.x,
          }}
        />
      );
    });
  };

  return (
    <div className="App" onClick={handleClick}>
      <h1>Dot tracker</h1>
      <h2>Start clicking in the screen and see the magic!</h2>
      {dots.length > 0 &&
      <div className="button-wrapper">
       <button onClick={clearDots}>Clear</button>
       <button onClick={back}>Back</button>
      </div>
      }
      {dots && renderDots()}
    </div>
  );
}
