import './App.css';
import Header from './Header';
import List from './List';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => { 
  return(
    <> 
    <BrowserRouter>
    <Header />
   <List />
   <Routes>
    <Route path='/'/>
    <Route/>
    <Route/>
   </Routes>
    </BrowserRouter>
  
  </>
 
  )
 
}
export default App;
 