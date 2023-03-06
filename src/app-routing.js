import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import SignForm from "./routes/SignFormPage";
import ImcForm from "./routes/imcs/ImcForm";
import CalculIMC from "./routes/imcs/CalculImc";


// const authCheck = (roleChecked) => {
//   const role = localStorage.getItem('role')

//   if (role === roleChecked) {
//     return true
//   } else {
//     return redirect(`/auth?mode=Sign+In`)
//   }
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      // {
      //   path: "/imc/add",
      //   element: <CalculIMC />,
      // },
      {
        path: "/Sign+Up",
        element: <SignForm />,
        // element: <ProtectedRoute roleChecked={"user"}><SignForm /></ProtectedRoute>
      },
      {
        path: "/Sign+In",
        element: <SignForm />,
      },
      // {
      //   path: "imc/add",
      //   element: <ImcForm />,
      // },
      {
        path: "/imc/edit/:imcId",
        element: <ImcForm />,
      },
      {
        path: "/imc/delete/:imcId",
        element: <ImcForm />,
      },
    ],
  },
]);

export default router;
