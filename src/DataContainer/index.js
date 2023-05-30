import React from "react";
import { useNavigate } from "react-router-dom";

const DataContainer = ({ coctails }) => {
  const navigate = useNavigate ();
  const handleClick = (idDrink) => {
    navigate (`/coctail/${idDrink}`)
  }
  return (
    <section className="section">
      {coctails.map((coctail) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          coctail;
        return (
          <React.Fragment key={idDrink}>
            <div className="cocteils-group">
              <article className="drinks-styles">
                <img
                  src={strDrinkThumb}
                  className="images-drinks-styles"
                  alt="eror"
                />
                <h3>{strDrink}</h3>
                <h4>{strGlass}</h4>
                <p>{strAlcoholic}</p>
                <button className="information-link" onClick={() => handleClick (idDrink)}>
                  DETAILS
                </button>
              </article>
            </div>
          </React.Fragment>
        );
      })}
    </section>
  );
};
export default DataContainer;
