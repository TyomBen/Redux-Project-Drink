import Header from "../../Header";
import { Link, useParams } from "react-router-dom";
import "./styles.css";
import React, { useState, useEffect } from "react";
import { URL } from "../../Utills/constants";
const InfoDetailsButton = () => {
  const { idDrink } = useParams();
  const [datas, setDatas] = useState([]);
  const gettingData = async () => {
    try {
      const response = await fetch(`${URL}lookup.php?i=${idDrink}`);
      const data = await response.json();
      const { drinks } = data;
      setDatas(drinks);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    gettingData();
  }, []);
  return (
    <>
      <Header />
      <div className="routing-button-container">
        <Link to={"/"} className="information-link routing-back-button">
          BACK HOME
        </Link>
      </div>
      <section className="section">
        {datas.map((item) => {
          const {
            idDrink,
            strDrink,
            strCategory,
            strAlcoholic,
            strGlass,
            strInstructions,
            strDrinkThumb,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
          } = item;
          return (
            <React.Fragment key={idDrink}>
              <h2 className="strDrink">{strDrink}</h2>
              <div className="datasContainer">
                <div className="strDrinkThumbContainer">
                  <img src={strDrinkThumb} className="strDrinkThumb" />
                </div>
                <div className="dataInfo">
                  <span className="strDrinkName samestyle"> Name : </span>{" "}
                  <span>{strDrink}</span> <br />
                  <span className="samestyle category"> Category :</span>{" "}
                  <span>{strCategory}</span> <br />
                  <span className="samestyle category"> Info :</span>{" "}
                  <span>{strAlcoholic}</span> <br />
                  <span className="samestyle category"> Glass : </span>{" "}
                  <span>{strGlass}</span> <br />
                  <span className="samestyle category">
                    {" "}
                    Instructons :{" "}
                  </span>{" "}
                  <span className="instructions">{strInstructions}</span> <br />
                  <span className="samestyle category">
                    {" "}
                    Ingredients :{" "}
                  </span>{" "}
                  <span>{strIngredient1}</span> <span>{strIngredient2}</span>{" "}
                  <span>{strIngredient3}</span>
                  <span> {strIngredient4}</span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </section>
    </>
  );
};

export default InfoDetailsButton;
