import React from "react";
import cn from 'classnames';

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {files: this.props.images, active: 0}
  }
  
  btnNext = () => {
    const stateNum = this.state.active
    const filesLength = this.state.files.length
    const picNum = (stateNum + 1) < filesLength ? (stateNum + 1) : 0
    this.setState({active: picNum})
  }

  btnPrev = () => {
    const stateNum = this.state.active
    const filesLength = this.state.files.length
    const picNum = (stateNum - 1) >= 0 ? (stateNum - 1) : (filesLength - 1)
    this.setState({active: picNum})
  }

  render() {
    return (
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {this.state.files.map((elem, id) => {
            const classImage = cn(
              'carousel-item',
              id === this.state.active ? 'active' : ''
            )
            return (
              <div className={classImage} key={id}>
                <img alt="" className="d-block w-100" src={elem} />
              </div>
            )
          })}
        </div>
        <button className="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev" onClick={this.btnPrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next" onClick={this.btnNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
  }
}

export default Carousel