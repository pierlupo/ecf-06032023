import BalanceLogo from "../assets/img/istockphoto-1078218542-170x170.jpg"
import "../App.css"
//import calculIMC from "./imcs/ImcCalc";

const HomePage = () => {
  return (
    <>
      <div className="col-6 offset-3 rounded bg-dark text-light p-3 mt-2">
        <h3>Bienvenue sur imc-app</h3>
        <hr />
        <img  className="BalanceLogo" src={BalanceLogo} alt="weight-person"/>

        <p className="p-2 my-3">
        L’indice de masse corporelle ou IMC (en anglais, body mass index ou BMI) est une grandeur qui permet d'estimer la corpulence d’une personne.
        Inventé au milieu du XIXe siècle par Adolphe Quetelet, mathématicien belge et l'un des fondateurs de la statistique moderne, cet indice est appelé aussi l'indice de Quetelet. 
        </p>
      <hr />
      </div>
      



    </>
  );
};

export default HomePage;