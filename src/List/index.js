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
  
  const [valuesearch, setValueSearch] = useState("");
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
