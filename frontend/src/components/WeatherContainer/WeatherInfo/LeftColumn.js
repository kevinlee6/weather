import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { UNITS } from 'constant';
import styled from 'styled-components';

const LeftColumn = ({ city, country, humidity, windSpeed, datetime, unit }) => (
  <Div>
    <Location>{`${city}, ${country}`}</Location>
    <p>Humidity: {humidity}%</p>
    <p>Wind: {`${windSpeed}${UNITS[unit][WIND]}`}</p>
    <LastUpdated>
      Last updated:
      <br />
      {moment.unix(datetime).format('MMMM D, YYYY hh:mm:ss A')}
    </LastUpdated>
  </Div>
);

const mapStateToProps = state => {
  const { weather } = state;
  const { unit } = state.unit;
  const { location, humidity, windSpeed, datetime } = weather;
  return { ...location, humidity, windSpeed, datetime, unit };
};

export default connect(mapStateToProps)(LeftColumn);

const WIND = 'WIND';

const Div = styled.div`
  flex-grow: 4;
`;

const Location = styled.p`
  font-size: 2em;
`;

const LastUpdated = styled.p`
  font-size: 0.8em;
`;
