import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UNITS } from 'constant';
import styled from 'styled-components';

const Div = styled.div`
  background-color: rgba(222, 222, 222, 0.7);
  border-radius: 20px;
  width: 50%;
  padding: 30px;
  margin: 30px;
  font-weight: 600;
`;

const WIND = 'WIND';
const TEMP = 'TEMP';

class WeatherInfo extends Component {
  render() {
    const { weather, unit } = this.props;
    const { temp, location, humidity, windSpeed } = weather;
    const { min, max, cur } = temp;
    const { city, country } = location;
    const units = UNITS[unit];
    const windUnit = units[WIND];
    const tempUnit = units[TEMP];
    return (
      <Div>
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
      </Div>
    );
  }
}

const mapStateToProps = state => {
  const { weather, unit } = state;
  return { weather, unit };
};

export default connect(mapStateToProps)(WeatherInfo);
