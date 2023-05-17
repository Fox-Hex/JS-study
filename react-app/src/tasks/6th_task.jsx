import React from "react"
import cn from 'classnames';


class Alert extends React.Component {
  render() {
    const { text, type } = this.props
    const classType = cn('alert', `alert-${type}`)
    return <div className={classType} role='alert'>{text}</div>
  }
}

export default Alert