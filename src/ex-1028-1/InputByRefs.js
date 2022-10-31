import React, { useRef } from 'react'

function InputByRefs() {
  //{current : null}
  const inputRef = useRef(null)

  return (
    <>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.value = 'test'
        }}
      >
        載入資料
      </button>
    </>
  )
}

export default InputByRefs
