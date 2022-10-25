import { useState } from 'react'

function Counter() {
  const [total, setTotal] = useState(0)
  // 設定useState狀態值為一對= 初始為0

  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -
      </button>
    </>
  )
}

export default Counter
