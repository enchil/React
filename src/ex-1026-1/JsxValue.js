function JsxValue() {
  return (
    <>
      <h1>JSX表達式</h1>
      <hr />
      <h2>Number</h2>
      {1 + 100}
      <br></br>
      {NaN}
      <br></br>
      {'a' - 0}
      <h2>String</h2>
      {'abc'}
      <br></br>
      {`total=${100 + 50}`}
      <h2>Boolean</h2>
      {true}
      {false}
      {'true／false不會顯示出來'}
      <h2>Null</h2>
      {null}
      <h2>Undefined</h2>
      {undefined}
      <h2>Array</h2>
      {[1, 2, 3, 4]}
      <h2>Object</h2>
      {/* 會有中斷錯誤 */}
      {/* {{ a: 1, b: 2 }} */}
      <h2>Function</h2>
      {() => {}}
    </>
  )
}

export default JsxValue
