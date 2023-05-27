import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import { URL } from '../Utills/constant';
import InfoDetailsButton from './InfoDetailsButton';
const DataContainer = ({coctails}) => {
    const [datas, setDatas] = useState ([])
    const gettingData = async (idDrink) => {
        try {
        const response = await fetch(`${URL}?i=${idDrink}`);
        const data = await response.json();
            setDatas (data)
        }catch (error) {
            throw error;
        }
        };
      
        const handleclick = (idDrink) => {
          gettingData (idDrink)
        }

    return (
    <section className = "section">
       {
          coctails.map (coctail => {
            const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = coctail;
            return (
            <React.Fragment key={idDrink}>
            <div className="cocteils-group">
            <article className="drinks-styles">
            <img src = {strDrinkThumb}
            className="images-drinks-styles"
            alt='eror'/>
            <h3>{strDrink}</h3>
            <h4>{strGlass}</h4>
            <p>{strAlcoholic}</p>
            <Link to={`/coctail/${idDrink}`} className="information-link"
             onClick={() => handleclick (idDrink)}>
            Details
            </Link>
            </article>
            </div>
            </React.Fragment>
            )
        })}
    </section>
    
    )
}
export default DataContainer;