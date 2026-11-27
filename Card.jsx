
function Card(props) {
  return (
    <>
   <div  style={{border:"solid black 1px",borderRadius:"10px"}} >
<img src={props.image} alt="" /> 
   <h2>{props.title}</h2>
    <p>{props.price}</p>
   </div>
    </>
  )
}

export default Card