
function Header() {
  return (
    <>
    <header  style={{display:"flex",
      justifyContent:"space-around"}}   >
      <img src="https://zerodha.com/static/images/logo.svg" alt="" />
      <nav style={{display:"flex",gap:"30px",alignItems:"center"}}  >
      <a href="">Signup</a>
      <a href="">About</a>
      <a href="">Products</a>
      <a href="">Pricing</a>
      <a href="">Support</a>
      </nav>
    </header>
    </>
  )
}

export default Header