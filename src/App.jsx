
import './App.css'
import Card from '../Card'
import products from './products'
function App() {
  return (
  <>
  <div style={{display:"flex",
    gap:"50px",
    flexWrap:"wrap"
  }}  >

{
  products.map((n)=>{
    return <Card image={n.image} title={n.title} price={n.price} />
  })
}
  </div>
  </>


  )
}

export default App
