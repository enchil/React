import { useState } from 'react'
import ChildB from './ChildB'
import ChildA from './ChildA'

function ParentFlow() {
  const [parentData, setParentData] = useState('parent Data')

  //為了要接收ChildB回傳的資料所設的狀態
  const [dataFromChildB, setDataFromChildB] = useState('')
  return (
    <>
      <h1>Parent</h1>
      <p>來自Child B的資料：{dataFromChildB}</p>
      <hr />
      <ChildA parentData={parentData}
       dataFromChildB={dataFromChildB} />
      <ChildB setDataFromChildB={setDataFromChildB} />
    </>
  )
}

export default ParentFlow
