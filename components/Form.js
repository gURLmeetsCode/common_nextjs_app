import React from 'react';


import Forecast from '../components/Forecast';



export default class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      zipcode: ''
    }
  }

  onChange = e => {
      this.setState({ zipcode: e.target.value })
    }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({zipcode: ''});
  }


  render() {
    const{ zipcode } = this.state
    console.log(this.state)
    return (
      <div className="container">
        <div className="wrapper">
          <div className="form-group">
            <h3 className="header">Enter your zipcode</h3>
            <input
            type="text"
            className="form-control"
            placeholder="zipcode"
            id="inputDefault"
            value={this.state.zipcode}
            onChange={this.onChange}
            />
          </div>
          <button type="button" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
          <style jsx>{`
            body {
              height: 100vh;
              width: 100vw;
            }

            .header{
              color: #fff;
              font-weight: 600;
              font-family: 'Apercu', 'sans-serif';
            }
            div {
              margin-top: 300px;
            }


            @media screen and (max-width : 320px) {

            }

            @media screen and (max-width : 800px) {


            }

        `}</style>
          <Forecast  zipcode={this.state.zipcode} />
        </div>
      </div>
    )
  }
}
