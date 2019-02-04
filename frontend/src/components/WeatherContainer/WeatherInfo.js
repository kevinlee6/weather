import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherInfo extends Component {
  render() {
    const {
      temp,
      minTemp,
      maxTemp,
      city,
      country,
      humidity,
      windSpeed,
    } = this.props.weather;
    return (
      <div>
        <div>
          <p>{temp}°</p>
          <div>
            <p>Low: {minTemp}°</p>
            <p>High: {maxTemp}°</p>
          </div>
        </div>
        <p>
          Location: {city}, {country}
        </p>

        <p>Humidity: {humidity}%</p>
        <p>Windspeed: {windSpeed}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { weather } = state;
  return { weather };
};

export default connect(mapStateToProps)(WeatherInfo);
