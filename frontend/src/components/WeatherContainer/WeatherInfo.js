import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UNITS } from 'constant';
import { titleCase } from 'helpers';
import moment from 'moment';
import styled from 'styled-components';

const Div = styled.div`
  background-color: rgba(222, 222, 222, 0.7);
  border-radius: 20px;
  width: 50%;
  padding: 30px;
  margin: 30px;
  font-weight: 600;
  font-size: 1.3em;
  display: flex;

  @media (max-width: 992px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Location = styled.p`
  font-size: 2em;
`;

const Temperature = styled.div``;

const LeftColumn = styled.div`
  flex-grow: 4;
`;

const RightColumn = styled.div`
  flex-grow: 1;
`;

const CurrentTemp = styled.p`
  font-size: 1.6em;
`;

const Status = styled.p`
  font-size: 1.4em;
`;

const LastUpdated = styled.p`
  font-size: 0.8em;
`;

const WIND = 'WIND';
const TEMP = 'TEMP';

class WeatherInfo extends Component {
  render() {
    const { weather, unit } = this.props;
    const status = titleCase(weather.weather);
    const { temp, location, humidity, windSpeed, datetime } = weather;
    const { min, max, cur } = temp;
    const { city, country } = location;
    const units = UNITS[unit];
    const windUnit = units[WIND];
    const tempUnit = units[TEMP];
    return (
      <Div>
        <LeftColumn>
          <Location>{`${city}, ${country}`}</Location>
          <p>Humidity: {humidity}%</p>
          <p>Wind: {`${windSpeed}${windUnit}`}</p>
          <LastUpdated>
            Last updated:
            <br />
            {moment.unix(datetime).format('MMMM D, YYYY hh:mm:ss A')}
          </LastUpdated>
        </LeftColumn>
        <RightColumn>
          <Status>{status}</Status>
          <Temperature>
            <CurrentTemp>{`${cur}${tempUnit}`}</CurrentTemp>
            <div>
              <p>Low: {`${min}${tempUnit}`}</p>
              <p>High: {`${max}${tempUnit}`}</p>
            </div>
          </Temperature>
        </RightColumn>
      </Div>
    );
  }
}

const mapStateToProps = state => {
  const { weather, unit } = state;
  return { weather, unit };
};

export default connect(mapStateToProps)(WeatherInfo);
