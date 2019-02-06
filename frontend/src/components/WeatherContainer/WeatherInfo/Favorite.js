import React from 'react';
import { connect } from 'react-redux';
import { toggleFavorite } from 'actions';
import { Button, Icon } from 'antd';
import styled from 'styled-components';

const Favorite = ({ toggleFavorite, favorite, city, country, city_id }) => (
  <SButton
    shape="circle-outline"
    type="ghost"
    onClick={() => toggleFavorite({ favorite, city, country, city_id })}
  >
    <Star type="star" theme={favorite ? 'filled' : 'twoTone'} />
  </SButton>
);

const mapStateToProps = state => {
  const { favorite, weather } = state;
  const { location, city_id } = weather;
  return { ...location, favorite, city_id };
};

export default connect(
  mapStateToProps,
  { toggleFavorite }
)(Favorite);

const Star = styled(Icon)`
  color: yellow;
`;

const SButton = styled(Button)`
  position: absolute !important;
  border: 0 !important;
  top: 8px;
  right: 8px;
`;
