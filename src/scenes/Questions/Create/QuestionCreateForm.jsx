import React from 'react'
import {Button, Form, Input} from 'antd';


@Form.create()
export default class QuestionCreate extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.onSubmit(values)
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 5},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 5,
        },
      },
    };


    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item
          {...formItemLayout}
          extra="Short description of your question"
          label="Title">
          {getFieldDecorator('name', {
            rules: [{required: true, message: 'Please input title of your question', whitespace: true}],
          })(<Input/>)}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          extra="Enter here the your question in details"
          label="Description">
          {getFieldDecorator('text', {
            rules: [{required: true, message: 'Please enter question description', whitespace: true}],
          })(
            <Input.TextArea/>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Ask</Button>
        </Form.Item>
      </Form>
    );
  }
}