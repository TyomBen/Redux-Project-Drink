import InfoDetailsButton from "../../DataContainer/InfoDetailsButton";
import Home from "../../Home";
import About from "../../DataContainer/About";
import Newsletter from "../../DataContainer/NewsLetter/newsletter";
import { Nomatch } from "../../DataContainer/NomatchPath/Nomatch";
export const paths = [
  {
    path: "/coctail/:idDrink",
    element: <InfoDetailsButton />,
    id : 1
  },

  {
    path: "/",
    element: <Home />,
    id : 2
  },

  {
    path: "/about",
    element: <About />,
    id : 3
  },

  {
    path : "/newsletter",
    element : <Newsletter />,
    id : 4
  },

  {
    path : '*',
    element : <Nomatch />,
    id : 5
  }
];
