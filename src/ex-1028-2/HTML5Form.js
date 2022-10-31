import React, { useState } from 'react'

function HTML5Form() {
  const [inputText, setInputText] = useState('')
  const [textArea, setTextArea] = useState('')
  const [agree, setAgree] = useState(false)

  const [gender, setGender] = useState('')
  const genderOptions = ['男', '女', '不想說']

  const [pet, setPet] = useState('')
  const petOptions = ['狗', '貓', '青蛙']

  const [fruit, setFruit] = useState(['蘋果', '香蕉'])
  const fruitOptions = ['芒果', '蘋果', '香蕉', '芭樂']

  return (
    <>
      <h1>文字輸入匡(input-text)</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <hr />
      <h1>文字輸入區域(textarea)</h1>
      <textarea
        value={textArea}
        onChange={(e) => {
          setTextArea(e.target.value)
        }}
      />
      <hr />
      <h1>checkbox單選(checkbox)</h1>
      <input
        type="checkbox"
        value={agree}
        onChange={(e) => {
          setAgree(e.target.checked)
        }}
      />
      單選
      <hr />
      <label>我同意會員註冊條款</label>
      <h1>選項按鈕群組(radio group)</h1>
      {genderOptions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              checked={gender === v}
              value={v}
              onChange={(e) => {
                setGender(e.target.value)
              }}
            />
            <label>{v}</label>
          </div>
        )
      })}
      <hr />
      <h1>下拉式清單</h1>
      <p>state:{pet}</p>
      <select
        value={pet}
        onChange={(e) => {
          setPet(e.target.value)
        }}
      >
        <option>---請選擇---</option>
        {petOptions.map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          )
        })}
      </select>
      <hr />
      <h1>checkbox多選</h1>
      {fruitOptions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              checked={fruit.includes(v)}
              value={v}
              onChange={(e) => {
                const value = e.target.value

                if (fruit.includes(value)) {
                  //如果此項目在state陣列中 -> 移出state陣列
                  const newFruit = fruit.filter((v2, i2) => v2 !== value)
                  setFruit(newFruit)
                } else {
                  //如果不在此state陣列中 -> 加到state陣列裡
                  const newFruit = [...fruit, value]
                  setFruit(newFruit)
                }
              }}
            ></input>
            <label>{v}</label>
          </div>
        )
      })}
    </>
  )
}

export default HTML5Form
