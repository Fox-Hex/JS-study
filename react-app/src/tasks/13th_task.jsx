import React from "react"
import { uniqueId } from 'lodash';

class Item extends React.Component {
  render() {
    const listElement = this.props.task
    const remove = this.props.onRemove
    return (
      <div>
        <div className="row">
          <div className="col-auto">
            <button type="button" className="btn btn-primary btn-sm" onClick={remove(listElement.id)}>-</button>
          </div>
          <div className="col">{listElement.text}</div>
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

  formSubmit = (elemId) => (e) => {
    e.preventDefault()
    const text = this.state.currentText
    const newTask = [{text: text, id: elemId}, ...this.state.tasks]
    this.setState({ currentText: '', tasks: newTask })
    console.log(this.state);
  }

  remove = (taskId) => () => {
    const newTasks = this.state.tasks.filter(elem => elem.id !== taskId)
    this.setState({tasks: newTasks})
  }

  initRender() {
    const currentText = this.state.currentText
    return (
      <div>
        <div className="mb-3">
          <form className="d-flex" onSubmit={this.formSubmit(uniqueId())}>
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

        {tasks.map((elem) => {
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