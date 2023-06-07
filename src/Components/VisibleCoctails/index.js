import InputSearch from "../InputSearch";
const VisibleCoctails = ({
  setValueSearch,
  valuesearch,
  DataContainer,
  data,
}) => {
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
            <InputSearch setValueSearch={setValueSearch} valuesearch={valuesearch}/>
            <h1>Cocktails</h1>
          </div>
        </section>
        <DataContainer data={data} />
      </main>
    </>
  );
};

export default VisibleCoctails;
