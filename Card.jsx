
function Card(props) {
  return (
    <>
   <div  style={{border:"solid black 1px",
    borderRadius:"10px",
    width:"250px",
    }} >
<img   width={240}       src={props.image} alt="" /> 
   <h2>{props.title}</h2>
    <p>{props.price}</p>
   </div>
    </>
  )
}

export default Card