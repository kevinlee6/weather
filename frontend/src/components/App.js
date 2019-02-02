import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { verify } from 'actions';
const { Content } = Layout;

const SContent = styled(Content)`
  padding: 3%;
  min-height: 84vh !important;
`;

class App extends Component {
  async componentDidMount() {
    const { verify } = this.props;
    await verify();
  }

  render() {
    const { children } = this.props;
    return (
      <Layout>
        <Header />
        <SContent>{children}</SContent>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default withRouter(
  connect(
    null,
    { verify }
  )(App)
);
