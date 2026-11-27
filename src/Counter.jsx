import { useState } from "react"
function Counter() {
const [count, setcount] = useState(0)


//fn which binvcrement the count
let handlecount=()=>{
setcount(count+1)
}

  return (
    <>
    <button onClick={handlecount}  >count {count} </button>
    </>
  )
}

export default Counter