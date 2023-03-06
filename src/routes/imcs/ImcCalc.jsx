// import { useState } from 'react';




// const calculIMC = () => {
    
//     const [poids, setPoids] = useState("");
//     const [taille, setTaille] = useState("");
//     const [message, setMessage] = useState("");
//     const [imcMessage, setImcMessage] = useState("");

//     const t = taille / 100;
//     const imc = poids / (t * t);

//     if(taille === "" && poids === ""){
//         alert("[ERROR 404] SVP, entrer un poids et une taille correctement !");
//     }else if(!t){
//         alert("[ERROR 404] SVP, entrer un poids et une taille correctement !");
        
//     }else if (imc < 16.9){
//         setMessage(`Votre IMC est trop bas !`);
//      setImcMessage(`Votre IMC est de : ${imc.toFixed(2)}`);
     
//    }else if(imc >= 17 && imc < 18.4){
//     setMessage(`Vous êtes maigre !`);
//     setImcMessage(`Votre IMC est de: ${imc.toFixed(2)}`);
     
//    }else if (imc >= 18.5 && imc < 24.9){
//     setMessage(`Votre poids est normal !`);
//     setImcMessage(`Votre IMC est de: ${imc.toFixed(2)}`);
    
//    }else if(imc >= 25 && imc < 29.9){
//     setMessage(`Você está acima do peso !`);
//     setImcMessage(`Votre IMC est de: ${imc.toFixed(2)}`);
     
//    }else if(imc >= 30 && imc < 34.9){
//     setMessage(`Vous êtes en obésité modérée !`);
//     setImcMessage(`Votre IMC est de: ${imc.toFixed(2)}`);

//    }else if(imc >= 35 && imc < 40){
//     setMessage(`Vous êtes en obésité sévère !`);
//     setImcMessage(`Votre IMC est de: ${imc.toFixed(2)}`);
//    }else if(imc >= 40){
//     setMessage(`Vous êtes en obésité morbide ou massive !`);
//     setImcMessage(`Votre IMC est de: ${imc.toFixed(2)}`);
//    }
//      setPoids("");
//      setTaille("");
  

//   return(
//    <div className="">
//       <div className="area-input">
//       <h1>Calcul de l'IMC</h1>
      
//           <input 
//             type="text"
//             placeholder="Poids em [KG] Ex: 75"
//             value={poids}
//             onChange={ (e) => setPoids(e.target.value) }
//           />

//           <input 
//             type="text"
//             placeholder="Taille em [CM] Ex: 170"
//             value={taille}
//             onChange={ (e) => setTaille(e.target.value) }
//           />

//           <button onClick={calculIMC}>
//             Calculer
//           </button>

//             <h2>
//                 {message} <br/>
//                 {imcMessage}
//             </h2>
//       </div>
      
//    </div>
//   );
// }  
// export default calculIMC;