import axios from 'axios'
import { useEffect, useState } from 'react'

function User() {
  // [{
  //     "id":"001",
  //     "name":"陳翔文",
  //     "birth":"991001",
  // }]
  const [users, setUsers] = useState([])

  //載入資料指示
  const [isLoading, setIsLoading] = useState(false)

  //錯誤訊息用
  const [errorMessage, setErrorMessage] = useState('')

  const getUsers = async () => {
    try {
      const response = await axios.get(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
      )
      console.log(response)

      //設定到state裡
      setUsers(response.data)
    } catch (error) {
      //錯誤處理
      console.log(error.message)
      setErrorMessage(error.message)
    }
  }

  //didMount時載入資料
  useEffect(() => {
    // 先開啟載入指示器 圈圈那個動畫
    setIsLoading(true)

    getUsers()

    //延後1.5秒才關掉指示器
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  const spinner = (
    <>
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  )

  const display = errorMessage ? (
    errorMessage
  ) : (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
        </tr>
      </thead>
      <tbody>
        {users.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.name}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

  return (
    <>
      <h1>會員資料</h1>
      <hr />
      {isLoading ? spinner : display}
    </>
  )
}

export default User
