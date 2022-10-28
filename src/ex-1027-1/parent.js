import Child from './Child'
import { useState } from 'react'

function Parent() {
  const [total, setTotal] = useState(0)
  return (
    <>
      <Child
        text="今天開始學React!"
        name="iphone"
        price={199}
        cat="手機"
        total={total}
        setTotal={setTotal}
        increment={2}
      />
      <Child increment={3} />
      <Child increment={5} />
      <Child />
      {/* 預設值 */}
    </>
  )
}

export default Parent
