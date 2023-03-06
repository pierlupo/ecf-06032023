// import { useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams, useSearchParams } from "react-router-dom";
// import { addImc, deleteImc, editImc } from "./imcSlice";


//  const ImcForm = () => {

    
//     const { imcId } = useParams();
//     const imc = useSelector((state) => state.imcs.imcs).find(
//         (i) => i.id === imcId
//     );
//   const [searchParams] = useSearchParams();
//   const mode = searchParams.get("mode") ?? "add";

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const poidsRef = useRef();
//   const tailleRef = useRef();
//   const dateRef = useRef();

//   const submitFormHandler = async (e) => {
//     e.preventDefault();

//     if (mode === "delete") {
//       await dispatch(deleteImc(imcId));
//     } else {
//       const poids = poidsRef.current.value;
//       const taille = tailleRef.current.value;
//       const date = dateRef.current.value;

//       const ImcValues = {
//         poids,
//         taille,
//         date,
//       };

//       console.log(ImcValues);

//       if (mode === "add") {
//         await dispatch(addImc(ImcValues));
//       } else if (mode === "edit") {
//         await dispatch(editImc({ id: imcId, ...ImcValues }));
//       }
//     }

//     navigate("/imcs");
//   };

//   return (
//     <>
//       <div className="col-4 offset-4 rounded bg-dark text-light p-3 mt-5">
//         <h3>
//           I.M.C.
//         </h3>
//         <hr />
//         <form onSubmit={submitFormHandler}>
//           {/* <div className="mb-3">
//             <label htmlFor="poids" className="form-label">
//               Entrer votre poids(en kilogrammes):
//             </label>
//             <input
//               type="number"
//               disabled={mode === "delete"}
//               name="poids"
//               id="poids"
//               required={mode !== "delete"}
//               className="form-control"
//               ref={poidsRef}
//               defaultValue={imc?.poids}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="taille" className="form-label">
//               Entre votre taille(en mètre):
//             </label>
//             <input
//               type="number"
//               disabled={mode === "delete"}
//               name="taille"
//               id="taille"
//               required={mode !== "delete"}
//               className="form-control"
//               ref={tailleRef}
//               defaultValue={imc?.taille}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="date" className="form-label">
//               Date:
//             </label>
//             <input
//               type="date"
//               disabled={mode === "delete"}
//               name="date"
//               id="date"
//               required={mode !== "delete"}
//               className="form-control"
//               ref={dateRef}
//               defaultValue={imc?.date}
//             />
//           </div> */}
//           <div className="text-end">
//             <button
//               className={`btn btn-${
//                 mode === "delete"
//                   ? "danger"
//                   : mode === "edit"
//                   ? "warning"
//                   : "success"
//               }`}
//             >
//               <i
//                 className={`bi bi-${
//                   mode === "delete"
//                     ? "trash"
//                     : mode === "edit"
//                     ? "pencil-square"
//                     : "plus-circle"
//                 }`}
//               ></i>{" "}
//               {mode === "delete"
//                 ? "Confirmer"
//                 : mode === "edit"
//                 ? "Editer"
//                 : "Ajouter" }
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default ImcForm;
