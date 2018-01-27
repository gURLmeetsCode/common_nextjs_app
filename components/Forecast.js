import React, {Component} from 'react';
import axios from 'axios';




export default class Forecast extends React.Component {

    static async getInitialProps () {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${this.props.zipcode}&APPID=6f9e2f1d20bef61a529b8dbdb3fd82ae&units=metric`);
      console.log(res.data)
      return {weather: res.data};
    }

    render() {
      const { weather } = this.props;

      console.log(this.props)
      return (
        <div className="container--section-two">
          <h1 className="header--section-two"> Here is your 5-day Forecast</h1>
          <div>
            <ul className="flex-wrapper">
              <li className="flex-item">1{weather}</li>
              <li className="flex-item">2</li>
              <li className="flex-item">3</li>
              <li className="flex-item">4</li>
              <li className="flex-item">5</li>
            </ul>
          </div>
          <style jsx>{`

            body {
              height: 100vh;
              width: 100vw;
            }

            .container--section-two{
              margin-top: 500px;
            }

            .header--section-two{
              color: #fff;
              font-family: 'Tiempos Headline', sans-serif;
              font-style: normal;
              font-weight: 300;
            }

            .flex-wrapper {
              padding: 0;
              margin: 0;
              list-style: none;

              display: -webkit-box;
              display: -moz-box;
              display: -ms-flexbox;
              display: -webkit-flex;
              display: flex;

              -webkit-flex-flow: row wrap;
              justify-content: space-around;
            }

            .flex-item {
              background: rgba(255, 255, 255, 0.4);
              padding: 5px;
              width: 200px;
              height: 250px;
              margin-top: 10px;

              line-height: 150px;
              color: #fff;
              font-weight: bold;
              font-size: 3em;
              text-align: center;
              box-shadow: 0 2px 8px 0 #fff;
            }

            div {
              margin-top: 60px;
              margin-bottom: 250px;
            }

            @media (max-width: 600px) {
              div {
                background: blue;
              }
            }
        `}</style>
        </div>
      )
    }
  }
