import {Link} from "react-router-dom"
function Header() {
  return (
    <>
    <header  style={{display:"flex",
      justifyContent:"space-around"}}   >
      <img  height={40}  width={75}   src="https://zerodha.com/static/images/logo.svg" alt="" />
      <nav style={{display:"flex",gap:"30px",alignItems:"center"}}  >
        <Link to={'/register'}  > <a href="">Signup</a></Link>
        <Link to={'/about'} ><a href="">About</a></Link>
        <Link to={'/products'}  ><a href="">Products</a></Link>
        <Link to={'/pricing'} ><a href="">Pricing</a></Link>
        <Link to={'/support'}><a href="">Support</a></Link>
      </nav>
    </header>
   
    </>
  )
}

export default Header