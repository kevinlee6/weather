import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Drawer, Icon as AntdIcon } from 'antd';
import AuthLinks from './AuthLinks';
import FavoriteList from './FavoriteList';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

class Sidebar extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({ visible: true });
  };

  onClose = () => {
    this.setState({ visible: false });
  };

  onDragEnd = result => {
    if (!result.destination) return;
  };

  render() {
    return (
      <div>
        <Icon
          className="sidebar-icon"
          type="menu-unfold"
          onClick={this.showDrawer}
        />
        <Drawer
          title={<AuthLinks closedrawer={this.onClose} />}
          placement="left"
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <DragDropContext onDragEnd={this.onDragEnd}>
            <FavoriteList />
            <div>Hello world</div>
          </DragDropContext>
        </Drawer>
      </div>
    );
  }
}

export default connect(null)(Sidebar);

const Icon = styled(AntdIcon)`
  color: white;
  font-size: 1.6em;
  padding: 0 10px 0 20px;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
