import './styles.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
    <>
    <header>
         <nav>
          <div className = "divHeader"> 
          <Link to = "/" className = "headerLink textDecorationNoneandColor">The Cocktail DB</Link>
          <Link to = "/" className = 'headerHomeLink textDecorationNoneandColor'>Home</Link>
          <Link to = "/about" className = 'headerHomeLink textDecorationNoneandColor'>About</Link>
          </div>
    </nav>
    </header>
    <hr className = "hrStyle"/>
    <div className='about-information'>
    </div>
     </>
    )
}


export default Header;