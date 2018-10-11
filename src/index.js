import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Input from './Input'
import Output from './Output'
import readme from './README.md'
import './styles.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    let input = e.target.value
    this.setState({ input })
  }

  componentDidMount() {
    this.setState({ input: readme })
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">freeCodeCamp Markdown Previewer</h1>
        <div className="container">
          <Input text={this.state.input} handleChange={this.handleChange} />
          <Output text={readme} output={this.state.input} />
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
