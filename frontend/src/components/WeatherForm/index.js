import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Form as AntdForm, Input, Button } from 'antd';
import { ErrorDiv } from 'components/Styled';
import schema from './schema';

const FormItem = AntdForm.Item;

class WeatherForm extends Component {
  handleSubmit = values => {
    console.log(values);
  };

  render() {
    const initialValues = { zip_code: '10001', city: '' };
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
                <Field
                  name="zip_code"
                  render={({ field }) => (
                    <Input {...field} placeholder="Zip Code" maxLength={5} />
                  )}
                />
              </FormItem>
              <FormItem>
                <Field
                  name="city"
                  render={({ field }) => (
                    <Input {...field} placeholder="City" />
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
          </React.Fragment>
        )}
      />
    );
  }
}

export default WeatherForm;
