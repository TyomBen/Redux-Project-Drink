import './styles.css';
import {useState} from 'react';
const Header = () => {
const [about, setAbout] = useState (true)
const handler = () => {
setAbout (!about)
}
    return (
    <>
    <header>
         <nav>
            <div className = "divHeader"> 
            <a href = "http://localhost:3000/" className = "headerLink textDecorationNoneandColor">The Cocktail DB</a>
          <a href = "http://localhost:3000/" className = 'headerHomeLink textDecorationNoneandColor'>Home</a>
          <a href = "#" className = 'headerHomeLink textDecorationNoneandColor' onClick={handler}> {about ? 'About' : 'Back'}</a>
          </div>
    </nav>
    </header>
     <hr className = "hrStyle"/>
     <div className='about-information'>
      {/* <p className='p'>About Us</p> */}
      <p className= {`p-hyden ${about ? 'p-hiden' : 'p'}`}>
        <h1 className={`p-hyden ${about ? 'p-hiden' : 'p'}`}>About Drinks</h1>
        A cocktail is an alcoholic mixed drink. Most commonly, cocktails are either a single spirit or a combination of spirits, mixed with other ingredients such as juices, flavored syrups, tonic water, shrubs, and bitters. Cocktails vary widely across regions of the world, and many websites publish both original recipes and their own interpretations of older and more famous cocktails.
        </p>
      </div>
     </>
    )
}


export default Header;