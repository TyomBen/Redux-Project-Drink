import Header from "../../Header";
import { Link } from "react-router-dom";
import './styles.css';
const InfoDetailsButton = ({coctails}) => {
    return (
        <>
        <Header />
        <div className="routing-button-container">
            <Link to={'/'} className="information-link routing-back-button">Back Home</Link>
        </div>
       
        </>
        
     
    )
        
}

export default InfoDetailsButton;