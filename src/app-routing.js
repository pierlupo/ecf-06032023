import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import SignForm from "./routes/SignFormPage";
import ImcForm from "./routes/imcs/ImcForm";
// import calculIMC from "./routes/imcs/ImcCalc";

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
      //   path: "/",
      //   element: <calculIMC />,
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
      {
        path: "/imcs/add",
        element: <ImcForm />,
      },
      {
        path: "/imcs/edit/:imcId",
        element: <ImcForm />,
      },
      {
        path: "/imcs/delete/:imcId",
        element: <ImcForm />,
      },
    ],
  },
]);

export default router;
