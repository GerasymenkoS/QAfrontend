import React, {Component} from 'react';
import {Card} from 'reactstrap';
import LoginForm from "./LoginForm";
import {loginUser} from "../auth.action";
import {connect} from "react-redux";
import Layout from "../../../components/Layout/Layout";
import CenteredSpin from "../../../components/CenteredSpin";

@connect(store => store.userReducer)
export default class Login extends Component {
    componentDidUpdate() {
        if (this.props.user)
            this.props.history.push('/')
    }

    handleSubmit(values) {
        this.props.dispatch(loginUser(values))
    }

    render() {
        return <Layout>
            <div className='d-flex justify-content-center align-items-center'>
                <Card style={{minWidth: 350}} className='mx-auto p-4'>
                    {this.props.loading ?
                        <CenteredSpin/>
                        :
                        <LoginForm errors={this.props.errors} onSubmit={this.handleSubmit.bind(this)}/>}

                </Card>
            </div>
        </Layout>
    }
}