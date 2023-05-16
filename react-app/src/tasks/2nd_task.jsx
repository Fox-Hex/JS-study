import React from "react"

const getCard = ({title, text}) => {
  if (!title && !text) {
    return null
  } else {
    class Card extends React.Component {
      render() {
        const titleDom = title && <h4 className="card-title">{title}</h4>
        const textDom = text && <p className="card-text">{text}</p>
        return (
          <div className="card">
            <div className="card-body">
              {titleDom}
              {textDom}
            </div>
          </div>
        )
      }
    }
    return Card
  }
}

export default getCard