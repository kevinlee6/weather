import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Layout, Spin } from 'antd';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { verify, fetchWeather } from 'actions';

class App extends Component {
  async componentDidMount() {
    const { verify, fetchWeather, unit } = this.props;
    await verify();
    await fetchWeather({ query: 'New York', unit });
  }

  render() {
    const { children, loading, weather } = this.props;
    return (
      <Spin spinning={loading}>
        <Layout>
          <Header />
          <Content weather={weather}>{children}</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Spin>
    );
  }
}

const mapStateToProps = state => {
  const { unit } = state;
  const { loading } = state.auth;
  const { weather } = state.weather;
  return { loading, weather, unit };
};

export default withRouter(
  connect(
    mapStateToProps,
    { verify, fetchWeather }
  )(App)
);
