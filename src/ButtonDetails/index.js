import { Link } from "react-router-dom"
const ButtonDetails = ({handleclick, idDrink}) => {
    <Link to={`/coctail/${idDrink}`} className="information-link"
    onClick={() => handleclick (idDrink)}>
   Details
   </Link>
}
export default ButtonDetails;