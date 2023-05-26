const DataContainer = ({coctails}) => {
    return (
    <section className = "section">
       {
          coctails.map (coctail => {
            const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = coctail;
            return ( 
            <>
            <div className="cocteils-group" 
            key={idDrink}>
            <article className="drinks-styles">
            <img src = {strDrinkThumb}
            className="images-drinks-styles"/>
            <h3>{strDrink}</h3>
            <h4>{strGlass}</h4>
            <p>{strAlcoholic}</p>
            <a href="#" 
            className="information-link">Details</a>
            </article>
            </div>
            </>
            )
        })}
    </section>
    )
}
export default DataContainer;