import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from 'actions';
// import { urlFriendly } from "../../helper";
import { Drawer, Icon as AntdIcon, List } from 'antd';
import styled from 'styled-components';

class Sidebar extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({ visible: true });
  };

  onClose = () => {
    this.setState({ visible: false });
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
          title={<Authentication {...this.props} closeDrawer={this.onClose} />}
          placement="left"
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <DrawerList {...this.props} closeDrawer={this.onClose} />
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { authenticated } = state.auth;
  return { authenticated };
};

export default connect(
  mapStateToProps,
  { signOut }
)(Sidebar);

const Icon = styled(AntdIcon)`
  color: white;
  font-size: 1.6em;
  padding: 0 10px 0 20px;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const StyledLink = styled(Link)`
  width: 80%;
  font-size: 1.6em;
`;

const ListItem = ({ children, link = '/', handleClick }) => (
  <List.Item>
    <StyledLink to={link} onClick={handleClick}>
      {children}
    </StyledLink>
  </List.Item>
);

const Authentication = ({ authenticated, signOut, closeDrawer }) => (
  <div onClick={closeDrawer}>
    {authenticated ? (
      <ListItem handleClick={signOut}>Sign out</ListItem>
    ) : (
      <Fragment>
        <ListItem link="/signin">Sign in</ListItem>
        <ListItem link="/register">Register</ListItem>
      </Fragment>
    )}
  </div>
);

const DrawerList = ({ closeDrawer }) => (
  <List onClick={closeDrawer}>
    <div>dummy</div>
  </List>
);
