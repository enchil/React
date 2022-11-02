import React, { useState } from 'react'
function MultipleInput() {
  //   const [username, setUsername] = useState('')
  //   const [password, setPassword] = useState('')

  //初始值若是物件，狀態不能是{}，要如下
  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  // true = 呈現密碼 / false = 隱藏密碼
  const [show, setShow] = useState(true)

  const handleFieldChange = (e) => {
    console.log(e.target.type, e.target.name, e.target.value)
    const newUser = { ...user, [e.target.name]: e.target.value }
    setUser(newUser)
  }

  return (
    <>
      <label>帳號</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleFieldChange}
      />
      <br />
      <label>密碼</label>
      <input
        type={show ? 'text' : 'password'}
        name="password"
        value={user.password}
        onChange={handleFieldChange}
      />
      <input
        type="checkbox"
        name="show"
        checked={show}
        onChange={() => {
          setShow(!show)
        }}
      />
      <span>顯示密碼</span>
    </>
  )
}
export default MultipleInput
