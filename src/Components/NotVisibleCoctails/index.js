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
              <input
                type="text"
                id="name"
                onChange={(event) => setValueSearch(event.target.value)}
                value={valuesearch}
              ></input>
              <h2 className="h2">No Cocktails Matched Your Search Criteria</h2>
            </div>
          </section>
        </main>
      </>
    );
  };
  
  export default NotVisibleCoctails;
  