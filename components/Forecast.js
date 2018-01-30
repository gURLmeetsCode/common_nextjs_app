import React from 'react';
import axios from 'axios';





export default class Forecast extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      weather: { list:[] }
    }
  }


  componentWillMount = async() => {
      this.lookupWeatherAt(this.props.zipcode);
    }

  componentWillReceiveProps = async(nextProps) => {
    this.lookupWeatherAt(nextProps.zipcode);
  }

  lookupWeatherAt = async(zipcode) => {
      try{
        console.log('Looking up weather at zipcode:', zipcode);
        let weather = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}&APPID=6f9e2f1d20bef61a529b8dbdb3fd82ae&units=imperial`)
        console.log('Retrieved weather at zipcode', zipcode, weather.data);
        this.setState({ weather: weather.data})
      }
      catch(er){
        console.log('Error retrieving weather', er.message);
        this.setState({ error: er.message });
      }
    }


  render() {
    return (
        <div className="wrapper">
        <div>
          <h4 className="header--section-two">Here is your forecast</h4>
        </div>
        <div className="container--section-two">
          <h4>{this.state.weather.city.name}</h4>
          {this.state.weather.list.map((item, index) => {
           return <div className="content" key={index}>
              <p>{item.dt_txt} <br />
              Description: {item.weather[0].description} <br />
              Temperature: {item.main.temp} <br />
              Max Temp: {item.main.temp_max} <br />
              Humidity: {item.main.humidity}</p>
            </div>;
            })
          }
        </div>
        <style jsx>{`
          .header--section-two{
            font-family: 'Tiempos Headline', 'sans-serif';
            letter-spacing: 1.2px;
            font-size: 2rem;
            color: rgb(221, 105, 41);
          }

          .wrapper{
            margin-top: 400px;
          }

          .container--section-two{
            height: 450px;
            width: 910px;
            border: 1px solid rgb(78, 93, 107);
            margin-top: 20px;
            margin-bottom: 40px;
            background: rgb(78, 93, 107);
            overflow: scroll;
          }

          @media screen and (max-width : 320px) {

          }

          @media screen and (max-width : 800px) {


          }
        `}</style>
      </div>
    )
  }
}
