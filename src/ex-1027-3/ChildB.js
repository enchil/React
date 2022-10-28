import { useState } from 'react'

function ChildB(props) {
  const [childBData, setChildBData] = useState('child B 的Data')
  return (
    <>
      <h1>ChildB</h1>
      <button
        onClick={() => {
          props.setDataFromChildB(childBData)
        }}
      >
        送資料回Parent
      </button>
    </>
  )
}

export default ChildB
