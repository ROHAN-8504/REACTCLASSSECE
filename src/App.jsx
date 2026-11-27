import './App.css'
import {Route,Routes} from 'react-router-dom'
import Products from './Products';
import Home from './Home';
import Prcing from './Prcing';
import Signup from './Signup';
import Support from './Support';
import About from './About';
import Header from './Header';
function App() {
  return (
  <>
  <Header/>
  <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/register' element={<Signup/>}  />
  <Route path='/about'  element={<About/>}   />
  <Route path='/pricing' element={<Prcing/>}  />
  <Route path='/support' element={<Support/>}  />
  <Route path='/products'   element={<Products/>} />
  </Routes>
  </>
  )
}

export default App
