import BalanceLogo from "../assets/img/istockphoto-655245878-170x170.jpg"
import "../App.css"
const HomePage = () => {
  return (
    <>
      <div className="col-6 offset-3 rounded bg-dark text-light p-3 mt-2">
        <h3>Welcome on your Body Mass Index App</h3>
        <hr />
        <img  className="BalanceLogo" src={BalanceLogo} alt="weight-person"/>

        <p>
        L’indice de masse corporelle ou IMC (en anglais, body mass index ou BMI) est une grandeur qui permet d'estimer la corpulence d’une personne.
        Inventé au milieu du XIXe siècle par Adolphe Quetelet, mathématicien belge et l'un des fondateurs de la statistique moderne, cet indice est appelé aussi l'indice de Quetelet. 
        </p>
      <hr />
      </div>
      


    </>
  );
};

export default HomePage;