

/*


import styles from "./page.module.css"; const element = (
<>
 <h1>Hola, Mundo!</h1>
 <h2>Son las {new Date().toTimeString() }</h2>
</>
); export default function Home() { return (
 <main className={styles.main}>
 <div className="App">
 {element}
 </div>
 </main>
);
}*/
/*import styles from "./page.module.css"; const Equipos = ({ equipos }) => { return (
<div className={styles.container__list}>
 <h2 className={styles.title}>Equipos de Fútbol</h2>
 {equipos.map((equipo) => (
 <div key={equipo.id}>
 <h3 className={styles.nameclub}>{equipo.nombre}</h3>
 <ul >
 {equipo.plantilla.map((jugador) => (
 <li className={styles.container__list} key={jugador.id}>
 <strong>{jugador.nombre}</strong>
 <p>Altura: {jugador.Altura}m <br></br> Peso:
{jugador.Peso}Kg</p> <img className={styles.img} src={jugador.foto}></img>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
);
};


export default function Home() {
 // Simula la obtención de datos desde tu JSON
  const equiposData = [
 {"id": 1,"nombre": "Real Madrid","plantilla":[
 {"id": 1,"nombre":"Eden Hazard","Altura":"1.75","Peso":"74Kg","foto":"https://vipdeportivo.es/wp-content/uploads/2023/09/fbl-esp-liga-almeria-real-madrid-scaled.jpg"},
 {"id": 2,"nombre":"Gonzalo García","Altura":"1.82","Peso":"74Kg","foto":"https://vipdeportivo.es/wp-content/uploads/2023/09/fbl-esp-liga-almeria-real-madrid-scaled.jpg"},
 {"id": 3,"nombre":"Karim Benzema","Altura":"1.85","Peso":"81Kg","foto":"https://vipdeportivo.es/wp-content/uploads/2023/09/fbl-esp-liga-almeria-real-madrid-scaled.jpg"},
 ]},

 {"id": 2,"nombre": "Barcelona","plantilla":[
 {"id": 1,"nombre":"Marc-André ter Stegen","Altura":"1.75","Peso":"74Kg","foto":"https://vipdeportivo.es/wp-content/uploads/2023/09/fbl-esp-liga-almeria-real-madrid-scaled.jpg"},
 {"id": 2,"nombre":"Iñigo Martinez","Altura":"1.82","Peso":"74Kg","foto":"https://vipdeportivo.es/wp-content/uploads/2023/09/fbl-esp-liga-almeria-real-madrid-scaled.jpg"},
 {"id": 3,"nombre":"Gavi","Altura":"1.85","Peso":"81Kg","foto":"https://vipdeportivo.es/wp-content/uploads/2023/09/fbl-esp-liga-almeria-real-madrid-scaled.jpg"}
 ]}
 // ... agregar otros equipos
];
 return (
  <main className={styles.main}>
<div>
 <h1>Mi Aplicación de Fútbol</h1>
 <Equipos equipos={equiposData} />
 </div>
 </main>
);
} */
"use client";
import { useState } from "react"; import styles from "./page.module.css";

export default function Home() { const [numero1, setNumero1] = useState(''); const [numero2, setNumero2]
= useState(''); const [resultado, setResultado] = useState(null);

const sumar = () => {
 const resultadoSuma = parseFloat(numero1) + parseFloat(numero2); setResultado(`Resultado de la suma: ${resultadoSuma}`);
};
const restar = () => {
 const resultadoResta = parseFloat(numero1) - parseFloat(numero2); setResultado(`Resultado de la resta:${resultadoResta}`);
};
const multiplicar = () => {
 const resultadomultiplicacion = parseFloat(numero1) * parseFloat(numero2); setResultado(`Resultado de la multiplicación:${resultadomultiplicacion}`);
};
const   division = () => {
  const n1= parseFloat(numero1);
  const n2= parseFloat(numero2);
  if(n2===0){
  setResultado('Error: División por cero no permitida.');

  }else{
 const resultadodivision = parseFloat(numero1) / parseFloat(numero2); setResultado(`Resultado de la division:${resultadodivision}`);}
};
const   potencia = () => {
 const resultadopotencia = parseFloat(numero1) ** parseFloat(numero2); setResultado(`Resultado de la potencia:${resultadopotencia}`);
};
const  raizcuadrada = () => {
 const resultadarraiz = Math.sqrt(parseFloat(numero1)); setResultado(`Resultado de la raíz cuadrada:${resultadarraiz}`);
};
const  limpiar = () => {
 setNumero1('');
 setNumero2('');
 setResultado(null);
};
 return ( <main className={styles.main}>
 <div className={styles.calculadora}>
  <label className={styles.title}>Calculadora</label>
 <div className={styles.numeros}>

 <label className={styles.text}>Número 1:</label> <input className={styles.inputnum}type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
 </div>
 <div className={styles.numeros}>
 <label className={styles.text} >Número 2:</label> <input className={styles.inputnum} type="number" value={numero2} onChange={(e) =>setNumero2(e.target.value)} />
 </div>
 <div>
 <button className={styles.button} onClick={sumar}>+</button>
 <button className={styles.button} onClick={restar}>-</button>
  <button className={styles.button} onClick={multiplicar}>x</button>
  <button className={styles.button} onClick={potencia}>^</button>
  <button className={styles.button} onClick={division}>/</button>
   <button className={styles.button} onClick={raizcuadrada}>√</button>
    <button className={styles.button} onClick={limpiar}>C</button>
 </div>
 {resultado && <div
className={styles.resultado}>{resultado}</div>}
 </div>
 </main>
);
} 

