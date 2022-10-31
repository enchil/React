import { useState } from 'react'

function BMI() {
  const [myheight, setMyHeight] = useState(0)
  const [myweight, setMyWeight] = useState(0)

  const [myBmi, setMyBmi] = useState(0)

  return (
    <>
      <h2>BMI計算表單</h2>
      <div>
        身高：
        <input
          type="number"
          value={myheight === 0 ? '' : myheight}
          placeholder="您的身高cm"
          onChange={(e) => {
            setMyHeight(Number(e.target.value))
          }}
        ></input>
      </div>
      <div>
        體重：
        <input
          type="number"
          value={myweight === 0 ? '' : myweight}
          placeholder="您的體重kg"
          onChange={(e) => {
            setMyWeight(Number(e.target.value))
          }}
        ></input>
      </div>
      <button
        onClick={() => {
          if (myweight < 10 || myheight < 100) {
            alert('身高體重輸入錯誤')
            return
          }
          //平方 Math.pow(7, 2)=49
          setMyBmi(myweight / Math.pow(myheight / 100, 2))
        }}
      >
        計算BMI
      </button>
      <button
        onClick={() => {
          setMyHeight(0)
          setMyWeight(0)
          setMyBmi(0)
        }}
      >
        清除
      </button>
      <hr />
      {/* toFixed()保留一位小數之後四捨五入  */}
      <p>你的BMI值為:{myBmi === 0 ? '' : myBmi.toFixed(1)}</p>
    </>
  )
}

export default BMI
