import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";

const DataContainer = ({ coctails }) => {
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
                <Link to={`/coctail/${idDrink}`} className="information-link">
                  DETAILS
                </Link>
              </article>
            </div>
          </React.Fragment>
        );
      })}
    </section>
  );
};
export default DataContainer;
