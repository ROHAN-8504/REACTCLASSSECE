
function Header() {
  return (
    <>
    <header  style={{display:"flex",
      justifyContent:"space-around"}}   >
      <img  height={40}  width={75}   src="https://zerodha.com/static/images/logo.svg" alt="" />
      <nav style={{display:"flex",gap:"30px",alignItems:"center"}}  >
      <a href="">Signup</a>
      <a href="">About</a>
      <a href="">Products</a>
      <a href="">Pricing</a>
      <a href="">Support</a>
      </nav>
    </header>
    <img src="https://zerodha.com/static/images/landing.svg" alt="" />
    <h1>Invest in Everything</h1>
    <p>Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.</p>
    <button>Signup</button>
    </>
  )
}

export default Header