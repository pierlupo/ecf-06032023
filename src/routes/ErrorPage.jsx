import { useRouteError } from "react-router-dom";
import BalanceError from "../assets/img/istockphoto-516929130-612x612.jpg";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <h1>Error {error.status}!</h1>
      <img
        src={BalanceError}
        alt="erreur 404"
        style={{ height: "75vh", width: "50vw" }}
      />
      <p>{error.data}</p>
    </div>
  );
};

export default ErrorPage;
