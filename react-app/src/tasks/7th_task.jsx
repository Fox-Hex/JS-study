import React from "react"
import cn from 'classnames';


class ListGroup extends React.Component {
  render() {
    const { children } = this.props
    return (
      <ul className="list-group">
        {React.Children.map(children, (elem) => {})}
      </ul>
    )
  }
}

export default ListGroup