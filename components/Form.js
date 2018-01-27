import React from 'react'

import Forecast from '../components/Forecast';



export default class Form extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        zipCode: ''
      }
    }


    handleSubmit = e => {
      e.preventDefault()
      this.setState({zipCode: ''});
    }


    render() {
      const{ zipCode } = this.state

      return (
        <div className="container">
          <div className="form-group">
            <h3 className="header">Enter your Zipcode</h3>
            <input
            type="text"
            className="form-control"
            placeholder="Zipcode"
            id="inputDefault"
            value={this.state.zipCode}
            onChange={e => this.setState({zipCode: e.target.value})}
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
            @media (max-width: 600px) {
              div {
                background: blue;
              }
            }
        `}</style>
        <Forecast  zipcode={this.state.zipCode} />
        </div>
      )
    }
  }
