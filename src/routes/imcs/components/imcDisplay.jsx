import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ImcDisplay = ({ imcId }) => {
  const imc = useSelector((state) => state.imcs.imcs).find(
    (i) => i.id === imcId
  );
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="col-12 my-3 border border-info rounded p-3">

      <div className="col-12">
        <div className="d-flex align-items-center justify-content-center">
          <h3  >
            {imc.poids} {imc.taille}
          </h3>
          {user && (
            <>
              <Link
                to={`/imcs/edit/${imcId}?mode=edit`}
                className="ms-auto btn btn-warning"
              >
                <i className="bi bi-pencil-square"></i>
              </Link>
              <Link
                to={`/imcs/delete/${imcId}?mode=delete`}
                className="ms-2 btn btn-danger"
              >
                <i className="bi bi-trash"></i>
              </Link>
            </>
          )}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ImcDisplay;