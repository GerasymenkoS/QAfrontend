import QuestionScene from "./Questions/QuestionScene"
import QuestionCreateScene from "./Questions/Create/QuestionCreateContainer"
import QuestionsScene from "./Questions/QuestionsScene"
import React from "react";
import {Link, Route, Switch} from "react-router-dom"

import {Button, Col, Icon, Menu, Row} from "antd"
import Layout from "../components/Layout/Layout"
import ProfileScene from "./Profile/ProfileScene"

export default ({location}) =>
  <Layout>
    <Row className='mt-5 justify-content-center'>
      <Col md={6} className='border-right'>
        <div className='mb-4 mr-md-2'>
          <Menu style={{minWidth: 20, width: '100%'}}>
            <Menu.Item>
              <Link to='/questions/create'>
                <Button type='primary' className='btn-block'><Icon type="wechat"/>Ask a question</Button>
              </Link>
            </Menu.Item>
            {location.pathname !== '/questions' ?
              <Menu.Item>
                <Link to='/questions'>
                  <Icon type='arrow-left'/>Back to questions
                </Link>
              </Menu.Item> : null}

            <Menu.Item>
              <Link to='/profile'>
                <Icon type="user"/>Profile
              </Link>
            </Menu.Item>
          </Menu>
        </div>
      </Col>
      <Col md={18} className='px-md-5'>
        <Switch>
          <Route path='/questions/create' component={QuestionCreateScene}/>
          <Route path='/questions/:id' component={QuestionScene}/>
          <Route path='/questions' component={QuestionsScene}/>
          <Route path='/profile' component={ProfileScene}/>

        </Switch>
      </Col>
    </Row>


  </Layout>