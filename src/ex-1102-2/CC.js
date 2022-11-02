import React, { Component } from 'react'

class CC extends Component {
  constructor() {
    super()
    this.state = { total: 0 }
    console.log('constructor')
  }

  //在render之後才會呼叫componentDidMount
  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    //可以得到最後改變的state值
    console.log('componentDidUpdate', 'total=', this.state.total)
  }

  render() {
    console.log('render')
    return (
      <>
        <h1>類別型元件ＣＣ</h1>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          {this.state.total}
        </h1>

        <hr />
      </>
    )
  }
}

export default CC
