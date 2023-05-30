import { useEffect, useState } from "react";
import "./styles.css";
import { URL } from "../Utills/constants";
import DataContainer from "../DataContainer";
import VisibleCoctails from "../Components/VisibleCoctails";
import NotVisibleCoctails from "../Components/NotVisibleCoctails";
const List = () => {
  const [coctails, setCoctails] = useState([]);
  const [valuesearch, setValueSearch] = useState("");
  const gettingData = async () => {
    try {
      const response = await fetch(`${URL}search.php?s=${valuesearch}`);
      const data = await response.json();
      const { drinks } = data;
      setCoctails(drinks);
    } catch (eror) {
      throw eror;
    }
  };
  useEffect(() => {
    gettingData();
  }, [valuesearch]);

  return coctails ? (
    <VisibleCoctails
      setValueSearch={setValueSearch}
      valuesearch={valuesearch}
      DataContainer={DataContainer}
      coctails={coctails}
    />
  ) : (
    <NotVisibleCoctails
      setValueSearch={setValueSearch}
      valuesearch={valuesearch}
    />
  );
};
export default List;
