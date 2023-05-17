import { useEffect, useState } from "react";
import './styles.css';
const List = () => {
    const [coctails, setCoctails] = useState ([]);
    const [valuesearch, setValueSearch] = useState ('');
    const gettingData = async () => {
        const response = await fetch ('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
        const data = await response.json ();
        setCoctails (data.drinks)
    }
  const filteredDrinks = coctails.filter (drink => {
    return drink.strDrink.toLowerCase ().includes (valuesearch.toLowerCase());
  })

  useEffect(() => {
    gettingData()
  }, []);
  
 
    return (
        <>
        <main>
     <div className="Form-Controlled">
         <label htmlFor = 'name' className= 'label '> Search Your Favorite Cocktail</label> <br />
         <input type = 'text' name="name" id="name" onChange={(event) => setValueSearch(event.target.value)}></input>
         <h1>Cocktails</h1>
     </div>
     </main>
        {
           filteredDrinks.map ((coctail) => {
           return ( 
            <>
        <main>
            <div className="cocteils-group ">
                <div className="drinks-styles ">
            <img src = {coctail.strDrinkThumb} className="images-drinks-styles"/>
            <h3>{coctail.strDrink}</h3>
            <h4>{coctail.strGlass}</h4>
            <p>{coctail.strGlass}</p>
            <a href="#">Details</a>
            </div>
            </div>
                </main>
            </>
           )
})}

        
        </>
    )
}

export default List;