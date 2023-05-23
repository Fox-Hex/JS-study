import React from "react";

class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      address: '',
      city: '',
      country: '',
      acceptRules: false,
      formState: 'filling',
    }
  }

  changeText = (e) => {
    const fieldName = e.target.name
    const fieldValue = e.target.value
    this.setState({[fieldName]: fieldValue})
  }

  changeCheckbox = (e) => {
    const fieldValue = e.target.checked
    this.setState({acceptRules: fieldValue})
  }

  formSubmit = (e) => {
    e.preventDefault()
    this.setState({formState: 'submited'})
  }

  goBack = () => {
    this.setState({formState: 'filling'})
  }

  renderForm = () => {
    const email = this.state.email
    const password = this.state.password
    const address = this.state.address
    const city = this.state.city
    const country = this.state.country
    const acceptRules = this.state.acceptRules
    
    return (
      <form name="myForm" onSubmit={this.formSubmit}>
        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="col-form-label">Email</label>
          <input type="email" name="email" className="form-control" id="email" placeholder="Email" value={email} onChange={this.changeText}/>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="password" className="col-form-label">Password</label>
          <input type="password" name="password" className="form-control" id="password" placeholder="Password" value={password} onChange={this.changeText} />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="address" className="col-form-label">Address</label>
          <textarea type="text" className="form-control" name="address" id="address" placeholder="1234 Main St" value={address} onChange={this.changeText}></textarea>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="city" className="col-form-label">City</label>
          <input type="text" className="form-control" name="city" id="city" value={city}  onChange={this.changeText}/>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="country" className="col-form-label">Country</label>
          <select id="country" name="country" className="form-control" value={country} onChange={this.changeText}>
            <option value="">Choose</option>
            <option value="argentina">Argentina</option>
            <option value="russia">Russia</option>
            <option value="china">China</option>
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
              <input id="rules" type="checkbox" name="acceptRules" className="form-check-input" checked={acceptRules} onChange={this.changeCheckbox} />
              Accept Rules
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    )
  }

  renderResult = () => {
    const data = Object.entries(this.state)
      .filter(elem => elem[0] !== 'formState')
      .sort((a, b) => {
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        return 0;
      })
      
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.goBack}>Back</button>
        <table className="table">
          <tbody>
            {data.map((elem, id) => {
              return (
                <tr key={id}>
                  <td>{elem[0]}</td>
                  <td>{elem[1].toString()}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

  render() {
    const formState = this.state.formState
    if (formState === 'filling') {
      return this.renderForm()
    } else if (formState === 'submited') {
      return this.renderResult()
    }
  }
}

export default MyForm