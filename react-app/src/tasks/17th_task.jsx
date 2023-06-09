import React from "react"
import axios from "axios"

class Autocomplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = {countries: []}
  }

  inputHandler = async (e) => {
    const path = 'https://web-js-react-async-5630898.evaluator7-5.hexlet.io/countries'
    const inputText = e.target.value
    if (inputText) {
      const res = await axios.get(path, { params: { term: inputText } });
      this.setState({countries: res.data})
    } else {
      this.setState({countries : []})
    }
  }

  render() {
    const countries = this.state.countries
    return (
      <div>
        <form>
          <input type="text" className="form-control" placeholder="Enter Country" onChange={this.inputHandler} />
        </form>
        {countries.length > 0 &&
        <ul>
          {countries.map((elem) => {
            return <li key={elem}>{elem}</li>
          })}
        </ul>}
      </div>
    )
  }
}

export default Autocomplete