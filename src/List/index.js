import { useEffect, useState } from "react";
import './styles.css';
import URL from "../Utils";
const List = () => {
    const [coctails, setCoctails] = useState ([]);
    const [valuesearch, setValueSearch] = useState ('');
    const gettingData = async () => {
        const response = await fetch (`${URL}?s=`);
        const data = await response.json ();
        setCoctails (data.drinks);
    }
  const filteredDrinks = coctails.filter (drink => {
    const {strDrink} = drink;
    return strDrink.toLowerCase ().includes (valuesearch.toLowerCase());
  })
  const handlerNotInteresting = (index) => {
    setCoctails (filteredDrinks.filter ((element, ind) => ind !== index));
  }



// console.log(localStorage.getItem('object'));
  
  useEffect(() => {
    gettingData()
  }, []);
  

    return (
        <>
        <section>
     <div className="Form-Controlled">
         <label htmlFor = 'name' className= 'label '> Search Your Favorite Cocktail</label> <br />
         <input type = 'text' name="name" id="name" onChange={(event) => setValueSearch(event.target.value)}></input>
         <h1>Cocktails</h1>
     </div>
     </section>
        {
           filteredDrinks.map ((coctail, index) => {
            const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = coctail;
           return ( 
            <>
            <div className="cocteils-group" key={idDrink}>
            <div className="drinks-styles">
            <img src = {strDrinkThumb} className="images-drinks-styles"/>
            <h3>{strDrink}</h3>
            <h4>{strGlass}</h4>
            <p>{strAlcoholic}</p>
            <a href="#" className="information-link">Details</a>
              <button className="Not-Intersted-button" onClick={() => { handlerNotInteresting (index) 
            localStorage.setItem('idDrink', JSON.stringify(idDrink));
            localStorage.setItem ('strDrink', JSON.stringify (strDrink))
            //Indz tvuma el mnacac@ strDrinkThumb ev ayln imast chka grelu arden parze;
              }}>Not Interesed</button>
            </div>
            </div>
            </>
           )
})}

        </>
    )
}

export default List;