
import './App.css'
import Card from '../Card'
import products from './products'
function App() {
  return (
  <>
{
  products.map((n)=>{
    return <Card image={n.image} title={n.title} price={n.price} />
  })
}
  </>


  )
}

export default App
