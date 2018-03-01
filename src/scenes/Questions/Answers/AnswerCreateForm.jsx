import React from 'react'
import {Button, Form, Input} from 'antd';


@Form.create()
export default class AnswerCreateForm extends React.Component {
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
        sm: {span: 8},
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
          offset: 8,
        },
      },
    };


    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator('text', {
            rules: [{required: true, message: 'Please enter question description', whitespace: true}],
          })(
            <Input.TextArea placeholder='Your answer here...'/>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Answer</Button>
        </Form.Item>
      </Form>
    );
  }
}