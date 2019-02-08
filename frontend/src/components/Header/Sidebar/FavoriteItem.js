import React from 'react';
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { fetchWeather } from 'actions';
import { ListItem } from './Styled';

const FavoriteItem = ({ city, city_id, country, i, fetchWeather, unit }) => (
  <Draggable key={city + city_id} draggableId={city + city_id} index={i}>
    {provided => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <ListItem
          handleclick={() => fetchWeather({ query: city, country, unit })}
        >
          {city}, {country}
        </ListItem>
      </div>
    )}
  </Draggable>
);

const mapStateToProps = state => {
  const { unit } = state.unit;
  return { unit };
};

export default connect(
  mapStateToProps,
  { fetchWeather }
)(FavoriteItem);
