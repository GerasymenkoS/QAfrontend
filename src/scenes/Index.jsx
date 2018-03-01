import React, {Component} from 'react'
import Layout from '../components/Layout/LayoutHOC'
import {Redirect} from "react-router-dom"

@Layout
export default class Index extends Component {
  render() {
    return <Redirect to='/questions'/>
  }
}
