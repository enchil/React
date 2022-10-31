import { useState } from 'react'
import './BirthSelect.css'

function BirthSelect() {
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [text, setText] = useState('')

  const makeOptions = (min, max) => {
    // 從最小開始排出按造順序+1
    const options = []

    for (let i = min; i < max + 1; i++) {
      options.push(i)
    }

    return options
  }

  console.log(makeOptions(1920, 2010))

  return (
    <>
      <span>
        西元
        <select
          value={year}
          onChange={(e) => {
            setYear(e.target.value)
          }}
        >
          <option value="">請選擇</option>
          {makeOptions(1920, 2010).map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
        </select>
        年
      </span>
      <span>
        <select
          value={month}
          onChange={(e) => {
            console.log(e.target.value)
            setMonth(e.target.value)
          }}
        >
          <option value="">請選擇</option>

          {/* {makeOptions(1, 12).map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })} */}
          {Array(12)
            .fill(1)
            .map((v, i) => {
              return (
                <option key={i} value={i+1}>
                  {i + 1}
                </option>
              )
            })}
        </select>
        月
      </span>
      <span>
        <select
          value={day}
          onChange={(e) => {
            setDay(e.target.value)
          }}
        >
          <option value="">請選擇</option>

          {makeOptions(1, new Date(year, month, 0).getDate()).map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
        </select>
        日
      </span>
      <br />
      <button
        onClick={() => {
          if (year === '' || month === '' || day === '') {
            alert('請先選擇年月日')
            return
          }
          //18年的微秒值
          const ms18yrars = 568036800000
          //使用者生日的微秒值
          const msBirth = Number(new Date(`${year}/${month}/${day}`))
          //目前時間的微秒值
          const msNow = Number(new Date())

          if (msNow - msBirth > ms18yrars) {
            setText('成年滿18歲')
          } else {
            setText('未成年不滿18歲')
          }
        }}
      >
        檢查是否滿18歲
      </button>
      <p className={text === '成年滿18歲' ? 'over18' : 'under18'}>{text}</p>
    </>
  )
}

export default BirthSelect
