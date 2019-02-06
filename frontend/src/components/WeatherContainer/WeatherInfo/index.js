import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Empty, Button, Icon } from 'antd';
import { toggleFavorite } from 'actions';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import styled from 'styled-components';

class WeatherInfo extends Component {
  render() {
    const { weather, favorite, toggleFavorite } = this.props;
    const { location, datetime } = weather;
    const { city, country } = location;
    return (
      <Div>
        {datetime ? (
          <Fragment>
            <LeftColumn />
            <RightColumn />
            <Favorite
              shape="circle-outline"
              type="ghost"
              onClick={() => toggleFavorite({ favorite, city, country })}
            >
              <Star type="star" theme={favorite ? 'filled' : 'twoTone'} />
            </Favorite>
          </Fragment>
        ) : (
          <SEmpty description="Enter a location to get started" />
        )}
      </Div>
    );
  }
}

const mapStateToProps = state => {
  const { weather, unit, favorite } = state;
  return { weather, unit, favorite };
};

export default connect(
  mapStateToProps,
  { toggleFavorite }
)(WeatherInfo);

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

const Star = styled(Icon)`
  color: yellow;
`;

const Favorite = styled(Button)`
  position: absolute !important;
  border: 0 !important;
  top: 8px;
  right: 8px;
`;
