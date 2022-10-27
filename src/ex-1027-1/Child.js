function Child({ cat, name, price }) {
  //const { cat, name, price } = props
  return (
    <>
      <div>分類：{cat}</div>
      <div>名稱：{name}</div>
      <div>定價：{price}</div>
    </>
  )
}

export default Child
