import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ListItem } from './Styled';

const FavoriteItem = ({ city, city_id, country, i }) => (
  <Draggable key={city + city_id} draggableId={city_id} index={i}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <ListItem>
          {city}, {country}
        </ListItem>
      </div>
    )}
  </Draggable>
);

export default FavoriteItem;
