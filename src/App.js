import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { paths } from "./Components/Paths";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {paths.map(({ path, element, id }) => {return <Route path={path} element={element} key={id} />;
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
