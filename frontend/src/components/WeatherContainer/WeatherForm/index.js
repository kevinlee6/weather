import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import { Form as AntdForm, Input, Button, message } from 'antd';
import { ErrorSpan } from 'components/Styled';
import QueryField from './QueryField';
import CountryField from './CountryField';
import schema from './schema';
import { fetchWeather } from 'actions';
import { QUERY } from 'constant';
import styled from 'styled-components';

const FormItem = AntdForm.Item;

const ErrorDiv = styled.div`
  height: 1px;
`;

class WeatherForm extends Component {
  handleSubmit = values => {
    const { fetchWeather, unit } = this.props;
    // Could alternatively use message error for flash message.
    fetchWeather({ ...values, unit })
      .then(resolve => {
        console.log(resolve);
        const { error } = resolve;
        if (error) {
          message.error('That location could not be found.');
        }
      })
      .catch(err => {
        message.error('Something went wrong.');
      });
  };

  render() {
    const initialValues = { query: '', country: '' };
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          this.handleSubmit(values);
        }}
        validationSchema={schema}
        render={() => (
          <React.Fragment>
            <Form className="ant-form ant-form-inline">
              <FormItem>
                <Input.Group compact>
                  <QueryField />
                  <CountryField />
                </Input.Group>
              </FormItem>
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  shape="circle"
                  icon="search"
                />
              </FormItem>
            </Form>
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
  const { unit } = state;
  return { unit };
};

export default connect(
  mapStateToProps,
  { fetchWeather }
)(WeatherForm);
