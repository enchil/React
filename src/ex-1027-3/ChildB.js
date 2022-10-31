import { useEffect, useState } from 'react'

function ChildB(props) {
  const [childBData, setChildBData] = useState('child B 的Data')

  useEffect(() => {
    props.setDataFromChildB(childBData)
  }, [childBData])

  return (
    <>
      <h1>ChildB</h1>
      <button
        onClick={
          (() => {
            props.setDataFromChildB(childBData)
          },
          [childBData])
        }
      >
        送資料回Parent
      </button>
    </>
  )
}

export default ChildB
