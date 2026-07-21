import React, { useState } from 'react';

// EJERCICIO:
// 1 - Contar cuántas veces jugó, cuántas ganó y cuántas perdió.
// 2 - Mostrar en rojo cuando pierda y en verde cuando gana.
// 3 - Validar el ingreso a número del 1 al 10.

function AdivinaComponent() {
  const [numero, setNumero] = useState(1);
  const [sorteo, setSorteo] = useState(0);
  const [result, setResult] = useState(false);
  const [jugadas, setJugadas] = useState(0);
  const [ganadas, setGanadas] = useState(0);
  const [perdidas, setPerdidas] = useState(0);

  const sortear = () => {
    // 3- Validación del número ingresado del 1 al 10
    if (numero < 1 || numero > 10) {
      alert("Debe ingresar un número entre 1 y 10");
      return;
    }

    const winner = Math.floor(Math.random() * 10) + 1;
    setSorteo(winner);
    
    // 1- Contador de partidas totales
    setJugadas(prev => prev + 1);

    // 1- Contador de victorias y derrotas
    if (winner === numero) {
      setGanadas(prev => prev + 1);
    } else {
      setPerdidas(prev => prev + 1);
    }
    
    setResult(true);
  };

  return (
    <div style={{ margin: 30 }}>
      {!result ? (
        <div>
          <h4>Adivina el Número del 1 al 10</h4>
          <input 
            type="number" 
            min="1" 
            max="10" 
            value={numero} 
            onChange={(e) => setNumero(Number(e.target.value))} 
          />
          <br /><br />
          <button onClick={sortear}> SORTEAR </button>
        </div>
      ) : (
        <>
          <hr />
          <h3>Usted eligió el {numero}</h3>
          <h3>Salió el número: {sorteo}</h3>
          
          {/* 2- Estilos dinámicos: Verde para ganar, rojo para perder */}
          <h3 style={{ color: sorteo === numero ? "green" : "red" }}>
            {sorteo === numero ? "¡Ha Ganado!" : "Siga participando"}
          </h3>
          <br />
          <button onClick={() => { setResult(false); setNumero(1); }}> 
            Volver a jugar 
          </button>
        </>
      )}

      <hr />
      <h3>Estadísticas</h3>
      <p>Jugadas: {jugadas}</p>
      <p>Ganadas: {ganadas}</p>
      <p>Perdidas: {perdidas}</p>
    </div>
  );
}

export default AdivinaComponent;