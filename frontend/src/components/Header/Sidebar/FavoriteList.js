import React from 'react';
import { connect } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import FavoriteItem from './FavoriteItem';
import { mapIds } from 'selectors';
import { List } from 'antd';

const FavoriteList = ({ favorite }) => {
  const favorites = mapIds(favorite);
  return (
    <Droppable droppableId="droppable">
      {provided => (
        <div ref={provided.innerRef}>
          <List
            size="large"
            dataSource={favorites}
            renderItem={(el, i) => <FavoriteItem {...el} i={i} />}
          />
        </div>
      )}
    </Droppable>
  );
};

const mapStateToProps = state => {
  const { favorite } = state;
  return { favorite };
};

export default connect(mapStateToProps)(FavoriteList);
