import React from 'react'
import {connect} from "react-redux"
import {Redirect, Route} from "react-router-dom"

@connect(store => store.userReducer)
export default class AuthorizedRoute extends React.Component {

  render() {
    const {component: Component, loading, user, ...rest} = this.props

    return (
      <Route {...rest} render={props => {
        if (loading) return <div>Loading...</div>
        return user
          ? <Component user={user} {...props} />
          : <Redirect to="/login"/>
      }}/>
    )
  }
}

