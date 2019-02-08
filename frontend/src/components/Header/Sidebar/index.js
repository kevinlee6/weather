import React, { Component } from "react";
import { connect } from "react-redux";
import { reorderFavorite } from "actions";
import { Drawer, Icon as AntdIcon } from "antd";
import AuthLinks from "./AuthLinks";
import FavoriteList from "./FavoriteList";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";

class Sidebar extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({ visible: true });
  };

  onClose = () => {
    this.setState({ visible: false });
  };

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
      source: source.index + 1
    });
  };

  render() {
    const { auth } = this.props;
    const { authenticated } = auth;
    return (
      <div>
        <Icon
          className="sidebar-icon"
          type="menu-unfold"
          onClick={this.showDrawer}
        />
        <Drawer
          title={<AuthLinks closeDrawer={this.onClose} />}
          placement="left"
          onClose={this.onClose}
          visible={this.state.visible}
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
  const { auth } = state;
  return { auth };
};

export default connect(
  mapStateToProps,
  { reorderFavorite }
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
