const InputSearch = ({ setValueSearch, valuesearch }) => {
    return (
        <input
        type="text"
        id="name"
        onChange={(event) => setValueSearch(event.target.value)}
        value={valuesearch}
      ></input>
    )
}

export default InputSearch;