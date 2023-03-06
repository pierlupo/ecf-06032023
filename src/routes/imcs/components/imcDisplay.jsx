import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ImcDisplay = ({ imcId }) => {
  const imc = useSelector((state) => state.imcs.imcs).find(
    (i) => i.id === imcId
  );
  const user = useSelector((state) => state.auth.user);
  //const setSelectedContactAndFormMode = props.setSelectedContactAndFormMode

  return (
    <div className="col-12 my-3 border border-info rounded p-3">
      {/* <div className="col-4 d-flex justify-content-center">
          <img src={contact.avatarURL} alt="Contact Avatar" style={{width: "250px", height: "250px", objectFit: "contain", borderRadius: "50%"}} />
        </div> */}
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