import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

class TodoBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {tasks: [], currentTask: ''}
  }

  async componentDidMount() {
    const getTasks = await axios.get(routes.tasksPath())
    this.setState({tasks: getTasks.data })
  }

  inputCurrent = (e) => {
    this.setState({currentTask: e.target.value})
  }

  addTask = async (e) => {
    e.preventDefault()
    await axios.post(routes.tasksPath(), {text: this.state.currentTask})
    const {tasks, currentTask} = this.state
    const tasksUpdate = update(tasks, { $unshift: [{ id: `${tasks.length+1}`, text: currentTask, state: 'active' }] })
    this.setState({currentTask: '', tasks: tasksUpdate})
  }

  changeStatus = async (index) => {
    const status = this.state.tasks.filter(({id}) => id === index)[0].state

    if (status === 'active') {
      await axios.patch(routes.finishTaskPath(index))
    } else {
      await axios.patch(routes.activateTaskPath(index))
    }

    const {tasks} = this.state
    const newStatus = (status === 'active') ? 'finished' : 'active'
    const itemIndex = tasks.findIndex(({id}) => id === index)
    const updateTasks = update(tasks, {[itemIndex]: {$merge: {state: newStatus}}})
    this.setState({tasks: updateTasks})
  }

  render() {
    const {tasks, currentTask} = this.state
    return (
      <div>
        <div className="mb-3">
          <form className="todo-form mx-3" onSubmit={this.addTask}>
            <div className="d-flex col-md-3">
              <input autoFocus value={currentTask} type="text" required className="form-control me-3" placeholder="I am going..." onChange={this.inputCurrent} />
              <button type="submit" className="btn btn-primary">add</button>
            </div>
          </form>
        </div>
        {tasks.filter(({state}) => state === 'active').length > 0 &&
          <div className="todo-active-tasks">
            {tasks
              .filter(({state}) => state === 'active')
              .map((elem) => <Item key={elem.id} task={elem} click={this.changeStatus} finish={false} />)
            }
          </div>
        }
        {tasks.filter(({state}) => state === 'finished').length > 0 &&
          <div className="todo-finished-tasks">
            {tasks
              .filter(({state}) => state === 'finished')
              .map((elem) => <Item key={elem.id} task={elem} click={this.changeStatus} finish={true} />)
            }
          </div>
        }
      </div>
    )
  }
}

export default TodoBox