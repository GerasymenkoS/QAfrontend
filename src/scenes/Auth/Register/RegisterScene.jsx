import React, {Component} from 'react'
import {Card} from "reactstrap";
import Layout from "../../../components/Layout/Layout";
import RegisterForm from "./RegisterForm";
import {registerUser} from '../auth.action'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

@connect(store => store.userReducer)
export default class Register extends Component {
  componentDidUpdate() {
    if (this.props.token)
      this.props.history.push('/')
  }

  handleSubmit(values) {
    this.props.dispatch(registerUser(values))
  }

  render() {
    const {user} = this.props
    if (user) {
      return <Redirect to='/dashboard'/>
    }
    return <Layout>
      <Card style={{maxWidth: 500}} className='mx-auto p-4'>
        <RegisterForm errors={this.props.errors} onSubmit={this.handleSubmit.bind(this)}/>
      </Card>
    </Layout>
  }
}
