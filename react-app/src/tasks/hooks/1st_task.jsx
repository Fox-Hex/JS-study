import React from "react";
import cn from 'classnames';

const BtnGroup = () => {
  const [activeButton, changeActive] = React.useState(null)

  const classButton = (position) => cn('btn btn-secondary', position, {active: activeButton === position})


  return (
    <div className="btn-group" role="group">
      <button type="button" className={classButton('left')} onClick={() => changeActive('left')}>Left</button>
      <button type="button" className={classButton('right')} onClick={() => changeActive('right')}>Right</button>
    </div>
  )
}

export default BtnGroup