import "./App.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { removeUser } from "./routes/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

// import { fetchImcs } from "./routes/imcs/ImcsSlice";

function App() {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const [poids, setPoids] = useState("");
  const [taille, setTaille] = useState("");
  const [message, setMessage] = useState("");
  const [imcMessage, setImcMessage] = useState("");  


  function calculIMC(){
  const t = taille / 100;
  const imc = poids / (t * t);

  if(taille === "" && poids === ""){
      alert("[ERROR 404] SVP, entrer un poids et une taille correctement !");
  }else if(!t){
      alert("[ERROR 404] SVP, entrer un poids et une taille correctement !");
      
  }else if (imc < 16.9){
      setMessage(`Votre IMC est trop bas !`);
   setImcMessage(`Votre IMC est de : ${imc.toFixed(2)}`);
   
 }else if(imc >= 17 && imc < 18.4){
  setMessage(`Vous êtes maigre !`);
  setImcMessage(`Votre IMC est de: ${imc.toFixed(2)}`);
   
 }else if (imc >= 18.5 && imc < 24.9){
  setMessage(`Votre poids est normal !`);
  setImcMessage(`Votre IMC est de: ${imc.toFixed(2)}`);
  
 }else if(imc >= 25 && imc < 29.9){
  setMessage(`Vous êtes en surpoids !`);
  setImcMessage(`Votre IMC est de: ${imc.toFixed(2)}`);
   
 }else if(imc >= 30 && imc < 34.9){
  setMessage(`Vous êtes en obésité modérée !`);
  setImcMessage(`Votre IMC est de: ${imc.toFixed(2)}`);

 }else if(imc >= 35 && imc < 40){
  setMessage(`Vous êtes en obésité sévère !`);
  setImcMessage(`Votre IMC est de: ${imc.toFixed(2)}`);
 }else if(imc >= 40){
  setMessage(`Vous êtes en obésité morbide ou massive !`);
  setImcMessage(`Votre IMC est de: ${imc.toFixed(2)}`);
 }
   setPoids("");
   setTaille("");

}
  // useEffect(() => {
  //   dispatch(fetchImcs());
  // }, [dispatch]);
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto">
                <Link className="navbar-brand p-2" to="/">
                  <i className="bi bi-globe"></i> IMC-APP
                </Link>
                {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Accueil</Link>
        </li> */}
                <li className="nav-item">
                  <Link className="nav-link " to={`/imcs/add`}>
                    Calculer votre IMC
                    <i className="bi bi-plus ms-2 btn btn-outline-success rounded-circle"></i>
                  </Link>
                </li>

                {/* <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Entrer un n° de flashCard"
                    aria-label="Search"
                  ></input>
                  <button className="btn btn-outline-success" type="submit">
                    GO
                  </button>
                </form> */}
              </ul>
              <div className="d-flex justify-content-center">
                {user ? (
                  <NavLink
                    onClick={() => dispatch(removeUser())}
                    className="navbar-nav nav-link ms-auto btn btn-secondary px-2"
                    to="/"
                  >
                    Deconnexion
                  </NavLink>
                ) : (
                  <>
                    <NavLink
                      className="navbar-nav nav-link ms-auto btn btn-outline-info px-2"
                      to={`/Sign+Up?mode=Inscription`}
                    >
                      Inscription
                    </NavLink>

                    <NavLink
                      className="navbar-nav nav-link ms-2 btn btn-primary px-2"
                      to={`/Sign+In?mode=Connexion`}
                    >
                      Connexion
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
        <h1>Calcul de l'IMC</h1>
      
          <input 
            type="text"
            placeholder="Poids em [KG] Ex: 75"
            value={poids}
            onChange={ (e) => setPoids(e.target.value) }
          />

          <input 
            type="text"
            placeholder="Taille em [CM] Ex: 170"
            value={taille}
            onChange={ (e) => setTaille(e.target.value) }
          />

          <button onClick={calculIMC}>
            Calculer
          </button>

            <h2>
                {message} <br/>
                {imcMessage}
            </h2>
      </main>
      </div>
    
  );
}

export default App;
