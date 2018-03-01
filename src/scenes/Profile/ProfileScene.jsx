import React from "react";
import {connect} from "react-redux"
import {Card} from "antd"

@connect(store => store.userReducer)
export default class ProfileScene extends React.Component {

  render() {
    const {user} = this.props

    return <div className='d-flex justify-content-center'>
      <Card title={user.first_name + ' ' + user.last_name} style={{width: 300}}>
        <p><strong>phone number:</strong> {user.phone}</p>
        <p><strong>email:</strong> {user.email}</p>
      </Card>
    </div>

  }
}