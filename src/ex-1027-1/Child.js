import { useState } from 'react'
function Child(props) {
  const { cat, name, price, increment = 1 } = props
  const [total, setTotal] = useState(0)

  //const { cat, name, price } = props
  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + increment)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default Child
