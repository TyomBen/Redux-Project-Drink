import { useEffect, useState } from "react";
import "./styles.css";
import { URL } from "../Utills/constants";
import DataContainer from "../DataContainer";
import VisibleCoctails from "../Components/VisibleCoctails";
import NotVisibleCoctails from "../Components/NotVisibleCoctails";
import { useDispatch, useSelector } from "react-redux";
import { fetchingData } from "../Components/store/action/action";
const List = () => {
  const dispatch = useDispatch ()
  const {data} = useSelector (({fetchingData }) => fetchingData )
  // const [coctails, setCoctails] = useState([]);
  const [valuesearch, setValueSearch] = useState("");
  // const gettingData = async () => {
  //   try {
  //     const response = await fetch(`${URL}search.php?s=${valuesearch}`);
  //     const data = await response.json();
  //     const { drinks } = data;
  //     setCoctails(drinks);
  //   } catch (eror) {
  //     throw eror;
  //   }
  // };
  // useEffect(() => {
  //   gettingData();
  // }, [valuesearch]);

  useEffect (() => {
    dispatch (fetchingData (valuesearch))
  }, [valuesearch])

  return data ? (
    <VisibleCoctails
      setValueSearch={setValueSearch}
      valuesearch={valuesearch}
      DataContainer={DataContainer}
      data={data}
    />
  ) : (
    <NotVisibleCoctails
      setValueSearch={setValueSearch}
      valuesearch={valuesearch}
    />
  );
};
export default List;
