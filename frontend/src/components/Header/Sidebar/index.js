import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reorderFavorite, showSidebar, hideSidebar } from 'actions';
import { Drawer, Icon as AntdIcon } from 'antd';
import AuthLinks from './AuthLinks';
import FavoriteList from './FavoriteList';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

class Sidebar extends Component {
  onDragEnd = result => {
    const { reorderFavorite } = this.props;
    const { destination, source } = result;
    const droppedToSameLocation =
      destination &&
      destination.droppableId === source.droppableId &&
      destination.index === source.index;
    const noChange = !destination || droppedToSameLocation;
    if (noChange) return;

    // priority starts at 1; not zero-index based
    reorderFavorite({
      destination: destination.index + 1,
      source: source.index + 1,
    });
  };

  render() {
    const { auth, sidebar, showSidebar, hideSidebar } = this.props;
    const { authenticated } = auth;
    return (
      <div>
        <Icon
          className="sidebar-icon"
          type="menu-unfold"
          onClick={showSidebar}
        />
        <Drawer
          title={<AuthLinks />}
          placement="left"
          onClose={hideSidebar}
          visible={sidebar}
        >
          {authenticated ? (
            <DragDropContext onDragEnd={this.onDragEnd}>
              <FavoriteList />
            </DragDropContext>
          ) : (
            <Div>
              Saved locations will be unlocked here when you register or sign
              in!
            </Div>
          )}
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { auth, sidebar } = state;
  return { auth, sidebar };
};

export default connect(
  mapStateToProps,
  { reorderFavorite, showSidebar, hideSidebar }
)(Sidebar);

const Div = styled.div`
  margin-top: 5vh;
  color: brown;
  font-size: 1.6em;
`;

const Icon = styled(AntdIcon)`
  color: white;
  font-size: 1.6em;
  padding: 0 10px 0 20px;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
