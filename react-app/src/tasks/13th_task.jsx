import React from "react"

class Item extends React.Component {
  render() {
    const listElement = this.props.task
    const remove = this.props.onRemove
    return (
      <div>
        <div className="row">
          <div className="col-auto">
            <button type="button" className="btn btn-primary btn-sm" onClick={remove(id)}>-</button>
          </div>
          <div className="col">{listElement}</div>
        </div>
        <hr />
      </div>
    )
  }
}

class TodoBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentText: '', tasks: [] }
  }

  changeText = (e) => {
    this.setState({ currentText: e.target.value })
  }

  formSubmit = (e) => {
    e.preventDefault()
    const newTasks = [this.state.currentText, ...this.state.tasks]
    this.setState({ currentText: '', tasks: newTasks })
  }

  remove = (taskId) => () => {
    const newTasks = this.state.tasks.filter(elem => (elem, id) => id !== taskId)
    this.setState({tasks: newTasks})
  }

  initRender() {
    const currentText = this.state.currentText
    return (
      <div>
        <div className="mb-3">
          <form className="d-flex" onSubmit={this.formSubmit}>
            <div className="me-3">
              <input type="text" value={currentText} required="" className="form-control"
                placeholder="I am going..." onChange={this.changeText} />
            </div>
            <button type="submit" className="btn btn-primary">add</button>
          </form>
        </div>
      </div>
    )
  }

  tasksRender() {
    const currentText = this.state.currentText
    const tasks = this.state.tasks
    return (
      <div>
        <div className="mb-3">
          <form className="d-flex" onSubmit={this.formSubmit}>
            <div className="me-3">
              <input type="text" value={currentText} required="" className="form-control"
                placeholder="I am going..." onChange={this.changeText} />
            </div>
            <button type="submit" className="btn btn-primary">add</button>
          </form>
        </div>

        {tasks.map((elem, id) => {
          return (
            <Item task = {elem} onRemove = {this.remove}/>
          )
        })}

      </div>
    )
  }

  render() {
    const tasks = this.state.tasks
    if (tasks.length === 0) {
      return this.initRender()
    } else {
      return this.tasksRender()
    }
  }
}

export default TodoBox