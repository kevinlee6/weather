import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import { Form as AntdForm, Input, Button, message } from 'antd';
import { ErrorSpan, ErrorDiv } from 'components/Styled';
import QueryField from './QueryField';
import CountryField from './CountryField';
import schema from './schema';
import { fetchWeather } from 'actions';
import { QUERY, APPJSON } from 'constant';
import axios from 'axios';
import styled from 'styled-components';

const FormItem = AntdForm.Item;

const SForm = styled(Form)`
  display: flex;
  justify-content: center;
`;

class WeatherForm extends Component {
  handleSubmit = values => {
    const { fetchWeather, unit, authenticated } = this.props;
    // Could alternatively use message error for flash message.
    fetchWeather({ ...values, unit })
      .then(resolve => {
        const { error } = resolve;
        if (error) {
          message.error('That location could not be found.');
        } else {
          if (authenticated) {
            const city = resolve.name;
            const country = resolve.sys.country;
            axios.post(
              '/locations',
              { city, country },
              { headers: { Accept: APPJSON, 'Content-Type': APPJSON } }
            );
          }
        }
      })
      .catch(err => {
        message.error('Something went wrong.');
      });
  };

  render() {
    const initialValues = { query: 'New York', country: '' };
    const { loading } = this.props;
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          this.handleSubmit(values);
        }}
        validationSchema={schema}
        render={() => (
          <React.Fragment>
            <SForm className="ant-form ant-form-inline">
              <FormItem>
                <Input.Group compact>
                  <QueryField />
                  <CountryField />
                </Input.Group>
              </FormItem>
              <FormItem>
                <Button
                  loading={loading}
                  type="primary"
                  htmlType="submit"
                  shape="circle"
                  icon="search"
                />
              </FormItem>
            </SForm>
            <ErrorDiv>
              <ErrorMessage component={ErrorSpan} name={QUERY} />
            </ErrorDiv>
          </React.Fragment>
        )}
      />
    );
  }
}

const mapStateToProps = state => {
  const { weather, auth } = state;
  const { authenticated } = auth;
  const { unit } = state.unit;
  const { loading } = weather;
  return { unit, loading, authenticated };
};

export default connect(
  mapStateToProps,
  { fetchWeather }
)(WeatherForm);
