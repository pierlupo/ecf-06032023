import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import SignForm from "./routes/SignFormPage";




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
      {
        path: "/Sign+Up",
        element: <SignForm />,
        // element: <ProtectedRoute roleChecked={"user"}><SignForm /></ProtectedRoute>
      },
      {
        path: "/Sign+In",
        element: <SignForm />,
      },

    ],
  },
]);

export default router;