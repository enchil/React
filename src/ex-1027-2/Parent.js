import Child from './Child'
import { useState } from 'react'

function ParentPropTypes() {
  return (
    <>
      <Child firstName="Enchi" lastName="Liang" />
      <Child firstName="bbb" />
    </>
  )
}

export default ParentPropTypes
