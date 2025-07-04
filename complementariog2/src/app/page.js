"use client";
import { useState } from "react";
import styles from "./page.module.css";
/*
export default function Home() {
  const [cont, setCont] = useState(0);

  const incrementar = () => {
    setCont(cont + 1);
  };

  const decrementar = () => {
    setCont(cont - 1);
  };

  return (
    <div>
      <h2>Contador: {cont}</h2>
      <button className={styles.button} onClick={incrementar}>
        Incrementar
      </button>
      <button className={styles.button} onClick={decrementar}>
        Decrementar
      </button>
    </div>
  );
}*/

// Convertidor de grados Celsius a Fahrenheit
/*export default function Home() {
 

  const [resultado1, setResultadoc] = useState(0);
    const [resultado2, setResultadof] = useState(0);

  const convertirACelsius = () => {
    const input = document.querySelector('input[type="number"]');
    const valor = parseFloat(input.value);
    if (valor !== NaN) {
      const celsius = (valor - 32) * 5 / 9;
      input.value = celsius.toFixed(2);
      setResultadoc(celsius);
     // return celsius;
    }
  }
const convertirAFahrenheit = () => {
  const input = document.querySelector('input[type="number"]');
  const valor2 = parseFloat(input.value);
  if (valor2 !== NaN) {
    const fahrenheit = (valor2 * 9/5) + 32;
    input.value = fahrenheit.toFixed(2);
    setResultadof(fahrenheit);
   // return fahrenheit;
  }
}

  return (
    <div>
      <h2>Convertidor de  grados Celsius a Fahrenheit </h2>

      <input className={styles.input} type="number" />
      <button className={styles.button} onClick={convertirACelsius} >
        Convertir a Grados Celsius
      </button>
      <button className={styles.button}  onClick={convertirAFahrenheit}>
        Convertir a Grados Fahrenheit
      </button>
      <p>Resultado: {resultado1} °C</p>
      <p>Resultado: {resultado2} °F</p>
    </div>
  );
}*/


export default function Home() {
 const usuario = "patricio";
  const contrasena = "gatito";
 const [usu, setusuario] = useState(''); 
    const [pass, setpass] = useState(''); 

  const logear = () =>{
   
    if (usu === usuario && pass === contrasena){
      alert("Login exitoso");
      
      setusuario("");
      setpass("");
    }else {
      alert("Usuario o contraseña incorrectos");
       setusuario("");
      setpass("");
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Login </h1>

      <input className={styles.input} value={usu} onChange={(e) => setusuario(e.target.value)} type="text" placeholder="Usuario" />
     
      <input className={styles.input} value={pass} onChange={(e) => setpass(e.target.value)} type="text" placeholder="Contraseña" />
      <button className={styles.button} onClick={logear}>
       Iniciar Sesión
      </button>
     
    </div>
  );
}