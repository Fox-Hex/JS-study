import React from 'react';

class Item extends React.Component {
  render() {
    const { task, click, finish } = this.props
    return (
      <div className="row">
        <div className="col-1">{task.id}</div>
        <div className="col">
          {finish ?
            <s>
              <a href="#" className="todo-task" onClick={() => click(task.id)}>{task.text}</a>
            </s>
            :
            <a href="#" className="todo-task" onClick={() => click(task.id)}>{task.text}</a>
          }
        </div>
      </div>
    )
  }
}

export default Item