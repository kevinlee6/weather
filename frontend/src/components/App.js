import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Layout, Spin } from 'antd';
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
    const { children, loading } = this.props;
    return (
      <Spin spinning={loading}>
        <Layout>
          <Header />
          <SContent>{children}</SContent>
          <Footer>Footer</Footer>
        </Layout>
      </Spin>
    );
  }
}

const mapStateToProps = state => {
  const { loading } = state.auth;
  return { loading };
};

export default withRouter(
  connect(
    mapStateToProps,
    { verify }
  )(App)
);
