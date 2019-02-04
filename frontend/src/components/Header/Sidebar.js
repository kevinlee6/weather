import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from 'actions';
// import { urlFriendly } from "../../helper";
import { Drawer, Icon as AntdIcon, List } from 'antd';
import styled from 'styled-components';

const Icon = styled(AntdIcon)`
  color: white;
  font-size: 1.6em;
  margin-right: 20px;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.6em;
`;

const handleSignOut = signOut => {
  signOut();
};

const ListItem = ({ children, link = '/', handleClick }) => (
  <List.Item>
    <StyledLink to={link} onClick={handleClick}>
      {children}
    </StyledLink>
  </List.Item>
);

const DrawerList = ({ authenticated, closeDrawer, signOut }) => (
  <List onClick={closeDrawer}>
    {authenticated ? (
      <ListItem handleClick={() => handleSignOut(signOut)}>Sign out</ListItem>
    ) : (
      <Fragment>
        <ListItem link="/signin">Sign in</ListItem>
        <ListItem link="/register">Register</ListItem>
      </Fragment>
    )}
  </List>
);

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
          title={<h2>Hello</h2>}
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
