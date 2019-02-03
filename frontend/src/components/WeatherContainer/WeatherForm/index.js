import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Form as AntdForm, Input, Button } from 'antd';
import { ErrorDiv } from 'components/Styled';
import schema from './schema';
import { validateZipAndCity } from 'helpers';
import styled from 'styled-components';

const FormItem = AntdForm.Item;

const SInput = styled(Input)`
  width: ${props => props.width}% !important;
`;

class WeatherForm extends Component {
  state = {
    hasError: false,
  };

  handleSubmit = values => {
    console.log(values);
    // Could alternatively use message error for flash message.
    if (!validateZipAndCity(values)) return this.setState({ hasError: true });
  };

  renderError = () => (
    <ErrorDiv>
      Both zip code and city are invalid. Either zip code must be 5 digits or
      city must be at least 2 letters.
    </ErrorDiv>
  );

  clearError = () => {
    this.setState({ hasError: false });
  };

  render() {
    const initialValues = { zip_code: '10001', city: '', country: '' };
    const { hasError } = this.state;
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          this.handleSubmit(values);
        }}
        validationSchema={schema}
        render={() => (
          <React.Fragment>
            <Form
              onChange={this.clearError}
              className="ant-form ant-form-inline"
            >
              <FormItem>
                <Input.Group compact>
                  <Field
                    name="city"
                    render={({ field }) => (
                      <SInput {...field} width={60} placeholder="City" />
                    )}
                  />
                  <Field
                    name="country"
                    render={({ field }) => (
                      <SInput
                        {...field}
                        width={40}
                        placeholder="Country (optional)"
                      />
                    )}
                  />
                </Input.Group>
              </FormItem>
              <FormItem>
                <Field
                  name="zip_code"
                  render={({ field }) => (
                    <Input {...field} placeholder="Zip Code" maxLength={5} />
                  )}
                />
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
            <ErrorMessage component={ErrorDiv} name="zip_code" />
            <ErrorMessage component={ErrorDiv} name="city" />
            {hasError ? this.renderError() : null}
          </React.Fragment>
        )}
      />
    );
  }
}

export default WeatherForm;
