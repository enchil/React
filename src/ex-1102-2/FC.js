import { useState, useEffect } from 'react'

function FC() {
  const [total, setTotal] = useState(0)

  //{}模擬DidMount,也是先render後DidMount，不會因為屬性改變或是狀態改變執行第二次
  //[]來自父母的屬性改變，或是狀態改變，用淺比較
  useEffect(() => {
    console.log('模擬DidMount')
  }, [])

  return (
    <>
      {console.log('render')}
      <h1>函式型元件ＦＣ</h1>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default FC
