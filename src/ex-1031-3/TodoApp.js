import { useState } from 'react'
import './TodoApp.css'

function TodoApp() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '買牛奶',
      completed: true,
    },
    { id: 2, text: '學react', completed: false },
  ])

  return (
    <>
      <h2>Todo List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            // 加入輸入的文字到todos陣列中
            // 三步驟的方式(拷貝 -> 加入到新陣列中 -> 設定回state)
            const newTodo = {
              id: Number(new Date()),
              text: e.target.value,
              completed: false,
            }
            const newTodos = [newTodo, ...todos]
            setTodos(newTodos)

            //清空input value
            setInputValue('')
          }
        }}
      />

      <ul>
        {todos.map((v, i) => {
          // key值會因索引值變後會變化，不能用索引值當key,用id
          return (
            <li
              key={v.id}
              className={v.completed ? 'completed' : 'not-completed'}
            >
              <input
                type="checkbox"
                checked={v.completed}
                onChange={() => {
                  //step1:先拷貝出新的物件陣列
                  const newTodos = todos.map((v2, i2) => {
                    //快速寫法：
                    // if (v2.id === v.id)
                    //   return { ...v2, completed: !v2.completed }
                    return { ...v2 }
                  })
                  //step2:在新的物件上列上修改
                  newTodos[i].completed = !newTodos[i].completed

                  //step3:設定回state
                  //setTodos(newTodos)

                  //全部寫一行
                  setTodos(
                    todos.map((v2, i2) =>
                      v2.id === v.id
                        ? { ...v2, completed: !v2.completed }
                        : { ...v2 }
                    )
                  )
                }}
              />
              {v.text}
              <button
                onClick={() => {
                  // step1:  拷貝出新的物件陣列
                  // step2: 在新的物件陣列上修改
                  const newTodos = todos.filter((v2, i2) => {
                    return v.id !== v2.id
                  })

                  // step3: 設定回state
                  setTodos(newTodos)
                }}
              >
                x
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoApp
