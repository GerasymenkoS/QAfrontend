import React from 'react'
import {getQuestions} from "./question.action"
import {connect} from "react-redux"
import CenteredSpin from "../../components/CenteredSpin"
import {Alert, Avatar, Card} from "antd"
import moment from 'moment'
import {Link} from "react-router-dom"

@connect(store => store.questionReducer)
export default class QuestionCreateContainer extends React.Component {

  componentDidMount() {
    this.props.dispatch(getQuestions())
  }

  render() {
    const {questions, loading} = this.props
    if (loading) return <CenteredSpin/>
    if (!questions.length) return <Alert message="No Questions here" type="error"/>
    return <div>
      <h4>Recent Questions:</h4>
      {questions.map((question, index) =>
        <Card className='my-2' key={index}>
          <div className='d-flex'>
            <div className='d-flex flex-column justify-content-center align-items-center mr-3'>
              <Avatar size='large'>{question.user.first_name + " " + question.user.last_name}</Avatar>
            </div>
            <div>
              <div><Link to={'/questions/' + question.id}>{question.name}</Link></div>
              <div className='mt-1'>
                <small className='text-muted text-center mt-2'>
                  {question.user.first_name + " " + question.user.last_name} {moment(question.updated_at).fromNow()}
                </small>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  }
}