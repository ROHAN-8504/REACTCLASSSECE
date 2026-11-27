import { useState,useEffect } from 'react';
import Card from '../Card'
function Products() {
    const [product, setproduct] = useState([])
    useEffect(()=>{
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((products) => setproduct(products));
  
    },[])
  return (
    <>
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

export default Products