import './App.css'
import {Route,Routes} from 'react-router-dom'
import Products from './Products';
import Header from './Header';
function App() {
  return (
  <>
  <Header/>
  
  <Route path='/products'   element={<Products/>}       />
  </>
  )
}

export default App
