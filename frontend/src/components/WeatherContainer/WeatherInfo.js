import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UNITS } from 'constant';

const WIND = 'WIND';
const TEMP = 'TEMP';

class WeatherInfo extends Component {
  render() {
    const { weather, unit } = this.props;
    const {
      temp,
      location,
      humidity,
      windSpeed,
    } = weather;
    const { min, max, cur } = temp;
    const { city, country } = location;
    const units = UNITS[unit];
    const windUnit = units[WIND];
    const tempUnit = units[TEMP];
    return (
      <div>
        <div>
          <p>{`${cur}${tempUnit}`}</p>
          <div>
            <p>Low: {`${min}${tempUnit}`}</p>
            <p>High: {`${max}${tempUnit}`}</p>
          </div>
        </div>
        <p>Location: {`${city}, ${country}`}</p>

        <p>Humidity: {humidity}%</p>
        <p>Windspeed: {`${windSpeed}${windUnit}`}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { weather, unit } = state;
  return { weather, unit };
};

export default connect(mapStateToProps)(WeatherInfo);
