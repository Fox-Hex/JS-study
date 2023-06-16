import React from "react";
import cn from 'classnames';

class Collapse extends React.Component {
  constructor(props) {
    super(props)
    const {opened} = props
    this.state = {opened}
  }

  open = () => {
    const openClose = this.state.opened
    this.setState({opened: !openClose})
  }

  render() {
    const {opened} = this.state
    const {text} = this.props
    const collapseClass = cn({
      collapse: true,
      show: opened,
    })
    return (
      <div>
        <p>
          <a className="btn btn-primary"
            data-bs-toggle="collapse"
            href="#" role="button"
            aria-expanded={opened}
            onClick={this.open}>
              Link with href
          </a>
        </p>
        <div className={collapseClass}>
          <div className="card card-body">
            {text}
          </div>
        </div>
      </div>
    )
  }
}

Collapse.defaultProps = {
  opened: true
}

export default Collapse