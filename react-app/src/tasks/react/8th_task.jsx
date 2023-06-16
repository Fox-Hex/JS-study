import React from "react";
import cn from 'classnames';


class BtnGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {left: false, right: false}
  }

  changeLeft = () => {
    this.setState({left: true, right: false})
  }

  changeRight = () => {
    this.setState({right: true, left: false})
  }

  render() {
    const btnLeftClass = cn(
      'btn btn-secondary left',
      this.state.left ? 'active' : ''
    )
    const btnRightClass = cn(
      'btn btn-secondary right',
      this.state.right ? 'active' : ''
    )
    return (
      <div className="btn-group" role="group">
        <button type="button" className={btnLeftClass} onClick={this.changeLeft}>
          Left
        </button>
        <button type="button" className={btnRightClass} onClick={this.changeRight}>
          Right
        </button>
      </div>
    )
  }
}

export default BtnGroup