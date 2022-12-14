import FC from './FC'
import CC from './CC'
import { useState } from 'react'

function Lifecycle() {
  const [show, setShow] = useState(true)
  return (
    <>
      {/* <CC /> */}
      {show && <FC />}
      <button
        onClick={() => {
          setShow(!show)
        }}
      >
        {show ? 'εθ¦' : 'εδΎ'}
      </button>
    </>
  )
}

export default Lifecycle
