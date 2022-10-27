import './Menu.css'
import { useState } from 'react'

function Menu() {
  const [active, setActive] = useState('')
  const menuItems = ['首頁', '關於我們', '產品']
  return (
    <>
      <ul>
        {menuItems.map((v, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                setActive(v)
              }}
            >
              <a href="#/" className={active === v ? 'active' : ''}>
                {' '}
                {v}{' '}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Menu
