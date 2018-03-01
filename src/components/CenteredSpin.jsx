import React from "react";
import {Spin} from "antd"

export default (props) =>
  <div style={{height:"20vh"}} {...props} className='d-flex justify-content-center align-items-center'>
    <Spin size="large"/>
  </div>