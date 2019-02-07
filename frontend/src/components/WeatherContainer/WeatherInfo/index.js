import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Empty } from 'antd';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import Favorite from './Favorite';
import styled from 'styled-components';

class WeatherInfo extends Component {
  render() {
    const { datetime, authenticated } = this.props;
    return (
      <Div>
        {datetime ? (
          <Fragment>
            <LeftColumn />
            <RightColumn />
            {authenticated ? <Favorite /> : null}
          </Fragment>
        ) : (
          <SEmpty description="Enter a location to get started" />
        )}
      </Div>
    );
  }
}

const mapStateToProps = state => {
  const { weather, auth } = state;
  const { datetime } = weather;
  const { authenticated } = auth;
  return { datetime, authenticated };
};

export default connect(mapStateToProps)(WeatherInfo);

const Div = styled.div`
  position: relative;
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

const SEmpty = styled(Empty)`
  margin: auto !important;
`;
