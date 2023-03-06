import "./App.css";
import { Link, NavLink, Outlet, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useState, useRef } from "react";
import { removeUser } from "./routes/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { addImc, deleteImc, editImc } from "./routes/imcs/imcSlice";


// import { fetchImcs } from "./routes/imcs/ImcsSlice";

function App() {
  const user = useSelector((state) => state.auth.user);
  const { imcId } = useParams();
  // const imcs = useSelector((state) => state.imcs.imcs).find(
  //   (i) => i.id === imcId);
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") ?? "add";



  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [poids, setPoids] = useState("");
  const [taille, setTaille] = useState("");
  const [message, setMessage] = useState("");
  const [imcMessage, setImcMessage] = useState("");  

  const poidsRef = useRef();
  const tailleRef = useRef();
  const messageRef = useRef();
  const imcMessageref = useRef();

  
  const submitFormHandler = async (e) => {
    e.preventDefault();

    if (mode === "delete") {
      await dispatch(deleteImc(imcId));
    } else {
      const poids = poidsRef.current.value;
      const taille = tailleRef.current.value;
      const message = messageRef.current.value;
      const imcMessage = imcMessageref.current.value
    //   const date = dateRef.current.value;

      const ImcValues = {
        poids,
        taille,
        message,
        imcMessage
        // date,
      };

      console.log(ImcValues);

      if (mode === "add") {
        await dispatch(addImc(ImcValues));
      } else if (mode === "edit") {
        await dispatch(editImc({ id: imcId, ...ImcValues }));
      }
    }

    navigate("/");
  };

  const calculIMC = () => {
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
                <NavLink className="navbar-brand p-2" to="/">
                  <i className="bi bi-globe"></i> IMC-APP
                </NavLink>
                {/* <li className="nav-item">
                  <NavLink className="nav-link " to="/imc/add">
                    Calculer votre IMC
                    <i className="bi bi-plus ms-2 btn btn-outline-success rounded-circle"></i>
                  </NavLink>
                </li> */}
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
        {!user &&(<h3 className="m-3">Veuillez vous connecter afin de calculer votre I.M.C.</h3>
        )}
        {user && (<> <h1>Calcul de l'IMC</h1>
          <div className="d-flex flex-column justify-content-center align-items-center col-6 offset-3 my-2">
            <div className="col-6">
          <form onSubmit={submitFormHandler}>
          <input 
            type="text"
            disabled={mode === "delete"}
            required={mode !== "delete"}
            className="form-control my-2 p-2 bg-light"
            placeholder="Poids en KG Ex:70"
            value={poids}
            ref={poidsRef}
            //   defaultValue={imcs?.poids}
            onChange={ (e) => setPoids(e.target.value) }
          />

          <input 
            type="text"
            disabled={mode === "delete"}
            required={mode !== "delete"}
            className="form-control my-2 p-2 bg-light"
            placeholder="Taille en CM Ex:180"
            value={taille}
            ref={tailleRef}
            //   defaultValue={imcs?.taille}
            onChange={ (e) => setTaille(e.target.value) }
          />
          <div className="text-end">
            <button onClick={calculIMC}
              className={`btn btn-${
                mode === "delete"
                  ? "danger"
                  : mode === "edit"
                  ? "warning"
                  : "success"
              }`}
            >
              <i
                className={`bi bi-${
                  mode === "delete"
                    ? "trash"
                    : mode === "edit"
                    ? "pencil-square"
                    : "plus-circle"
                }`}
              ></i>{" "}
              {mode === "delete"
                ? "Confirmer"
                : mode === "edit"
                ? "Editer"
                : "Calculer" }
            </button>
          </div>
          <button  className="btn btn-outline-secondary p-2 my-2" onClick={calculIMC}>
            Calculer
          </button>
          </form>
            <h4 ref={messageRef}>{message}</h4> <br/>
            <h4 ref={imcMessageref}>{imcMessage}</h4>
            
            </div>
            </div>
          </>) }
            
      </main>
      </div>
    
  );
}

export default App;
