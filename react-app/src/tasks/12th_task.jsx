import React from "react";

class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = { log: [], stringValue: 0 }
  }

  addLine = (e) => {
    const log = this.state.log
    let newStringValue = this.state.stringValue
    if (e.target.innerHTML === '+') {
      newStringValue += 1
    }
    if (e.target.innerHTML === '-') {
      newStringValue -= 1
    }
    this.setState({ stringValue: newStringValue, log: [newStringValue, ...log] })
  }

  delLine = (lineId) => () => {
    const newLog = this.state.log.filter((elem, id) => id !== lineId)
    this.setState({ log: newLog })
    if (newLog.length === 0) {
      this.setState({ stringValue: 0 })
    }
  }

  initRender = () => {
    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <button type="button" className="btn btn-outline-success" onClick={this.addLine}>+</button>
          <button type="button" className="btn btn-outline-danger" onClick={this.addLine}>-</button>
        </div>
      </div>
    )
  }

  loggedRender = () => {
    const log = this.state.log
    return (
        <div>
          <div className="btn-group font-monospace" role="group">
            <button type="button" className="btn btn-outline-success" onClick={this.addLine}>+</button>
            <button type="button" className="btn btn-outline-danger" onClick={this.addLine}>-</button>
          </div>
          <div className="list-group">
            {log.map((elem, id) => {
              return (
                <button type="button" className="list-group-item list-group-item-action" key={id} onClick={this.delLine(id)}>
                  {elem}
                </button>
              )
            })}
          </div>
        </div>
    )
  }

  render() {
    const log = this.state.log
    if (log.length === 0) {
      return this.initRender()
    } else {
      return this.loggedRender()
    }
  }
}

export default Component