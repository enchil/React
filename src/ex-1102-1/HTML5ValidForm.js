import { useState } from 'react'

function HTML5ValidForm() {
  //   const [username, setUsername] = useState('')
  //   const [password, setPassword] = useState('')

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })

  //紀錄欄位錯誤的訊息
  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    email: '',
    password: '',
  })

  // true = 呈現密碼 / false = 隱藏密碼
  const [show, setShow] = useState(false)

  const handleFieldChange = (e) => {
    //console.log(e.target.type, e.target.name, e.target.value)
    // computed property name
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    const newUser = { ...user, [e.target.name]: e.target.value }
    setUser(newUser)
  }

  const handleFormSubmit = (e) => {
    //阻擋預設form送出的行為
    e.preventDefault()

    //得到輸入值的方式
    //第1種，從state直接得到
    console.log(user)

    //第2種，從Formdata得到
    const formData = new FormData(e.target)
    console.log(
      formData.get('username'),
      formData.get('email'),
      formData.get('password')
    )

    //其他驗證 修改

    //送到伺服器
  }

  const handleFormInvalid = (e) => {
    //阻擋預設行為-關掉泡泡訊息
    e.preventDefault()
    console.log(e.target.name, e.target.validationMessage)
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    })
  }

  //有錯誤訊息之後，使用正回頭填欄位時，要把目前正在修改的欄位的錯誤訊息清空
  const hanedleFormChange = (e) => {
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: '',
    })
  }

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        onInvalid={handleFormInvalid}
        onChange={hanedleFormChange}
      >
        <label>帳號</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleFieldChange}
          required
          //required是這個欄位必填
        />
        <span>{fieldErrors.username}</span>
        <br />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleFieldChange}
          required
        />
        <span>{fieldErrors.email}</span>

        <br />
        <label>密碼</label>
        <input
          type={show ? 'text' : 'password'}
          name="password"
          value={user.password}
          onChange={handleFieldChange}
          required
        />
        <span>{fieldErrors.password}</span>

        <input
          type="checkbox"
          name="show"
          checked={show}
          onChange={() => {
            setShow(!show)
          }}
        />
        <label>顯示密碼</label>
        <br />
        {/* button沒加 type 等於type="submit" */}
        <button type="submit">送出</button>
        <button
          type="button"
          onClick={() => {
            setUser({
              username: 'cat',
              email: 'moji@momo',
              password: 'mojimoji',
            })
          }}
        >
          快速填入資料鍵
        </button>
      </form>
    </>
  )
}

export default HTML5ValidForm
