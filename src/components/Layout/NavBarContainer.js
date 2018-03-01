import React from 'react';
import {logoutUser} from "../../scenes/Auth/auth.action"
import {connect} from "react-redux"
import UserNavbar from "./UserNavbar"
import GuestNavbar from "./GuestNavbar"

@connect(store => store.userReducer)
export default class NavBarContainer extends React.Component {

  render() {
    const {user} = this.props;
    if (user) return <UserNavbar onLogout={() => this.props.dispatch(logoutUser())} user={user}/>
    return <GuestNavbar/>
  }
}
