import { useState,useEffect } from 'react';
import './App.css'
import Card from '../Card'
import Header from './Header';
// import products from './products'
function App() {
  const [product, setproduct] = useState([])
  useEffect(()=>{
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => setproduct(products));

  },[])
  
  return (
  <>
  <Header/>

  <div style={{display:"flex",
    gap:"50px",
    flexWrap:"wrap"
  }}  >

{
  product.map((n)=>{
    return <Card image={n.image} title={n.title} price={n.price} />
  })
}
  </div>
  </>


  )
}

export default App
