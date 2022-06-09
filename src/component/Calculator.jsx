import React, { Component } from "react"

export default class Calculator extends Component {
  state = {
    total: 0,
    num1: "",
    num2: "",
    op: "+",
  }

  setNum = e => {
    const updatedNumbers = { [e.target.name]: e.target.value }
    this.setState(updatedNumbers)
  }

  calculateTotal = e => {
    e.preventDefault()
    const num1 = this.state.num1
    const num2 = this.state.num2
    let total
    switch (this.state.op) {
      case "+":
        total = parseInt(num1) + parseInt(num2)
        break
      case "-":
        total = parseInt(num1) - parseInt(num2)
        break
      case "*":
        total = parseInt(num1) * parseInt(num2)
        break
      case "/":
        total = parseInt(num1) / parseInt(num2)
        break
      default:
        break
    }
    this.setState({ total })
  }

  render() {
    return (
      <div className="caclulator">
        <h1>Calculate with React!</h1>

        <form onSubmit={this.calculate}>
          <input
            type="number"
            name="num1"
            value={this.state.num1}
            onChange={this.setNum}
          />
          <span>{this.state.op}</span>
          <input
            type="number"
            name="num2"
            value={this.state.num2}
            onChange={this.setNum}
          />
          <button onClick={this.calculateTotal}>=</button>
          <h3>{this.state.total}</h3>
        </form>
        <button onClick={() => this.setState({ op: "+" })}>+</button>
        <button onClick={() => this.setState({ op: "-" })}>-</button>
        <button onClick={() => this.setState({ op: "*" })}>*</button>
        <button onClick={() => this.setState({ op: "/" })}>/</button>
      </div>
    )
  }
}
