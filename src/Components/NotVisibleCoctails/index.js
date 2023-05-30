import InputSearch from "../InputSearch";
const NotVisibleCoctails = ({ valuesearch, setValueSearch }) => {
    return (
      <>
        <main>
          <section>
            <div className="Form-Controlled">
              <label htmlFor="name" className="label">
                {" "}
                Search Your Favorite Cocktail
              </label>{" "}
              <br />
              <InputSearch setValueSearch = {setValueSearch} valuesearch = {valuesearch}/>
              <h2 className="h2">No Cocktails Matched Your Search Criteria</h2>
            </div>
          </section>
        </main>
      </>
    );
  };
  
  export default NotVisibleCoctails;
  