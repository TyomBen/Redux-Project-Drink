import InfoDetailsButton from "../../DataContainer/InfoDetailsButton";
import Home from "../../Home";
import About from "../../DataContainer/About";
export const paths = [
  {
    path: "/coctail/:idDrink",
    element: <InfoDetailsButton />,
  },

  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/about",
    element: <About />,
  },
];
