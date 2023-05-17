import './styles.css';

const Header = () => {
    return (
    <>
    <header>
         <nav>
            <div className = "divHeader"> 
            <a href = "http://localhost:3000/" className = "headerLink textDecorationNoneandColor">The Cocktail DB</a>
          <a href = "http://localhost:3000/" className = 'headerHomeLink textDecorationNoneandColor'>Home</a>
          <a href = "#" className = 'headerHomeLink textDecorationNoneandColor'>About</a>
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