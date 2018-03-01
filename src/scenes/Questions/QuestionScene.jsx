import React from 'react'
import {getQuestion} from "./question.action"
import {connect} from "react-redux"
import CenteredSpin from "../../components/CenteredSpin"
import {Alert, Avatar, Card} from "antd"
import moment from 'moment'
import {withRouter} from "react-router-dom"
import Answers from "./Answers/AnswersContainer"

@connect(store => store.questionReducer)
@withRouter
export default class QuestionScene extends React.Component {

  componentDidMount() {
    this.props.dispatch(getQuestion(this.props.match.params.id))
  }

  render() {
    const {question, loading} = this.props
    if (loading) return <CenteredSpin/>
    if (!question) return <Alert message="Question does not exist" type="error"/>

    return <div>
      <Card className='mb-2'>
        <div className='d-flex'>
          <div className='d-flex flex-column justify-content-center align-items-center mr-3'>
            <Avatar size='large'>{question.user.first_name + " " + question.user.last_name}</Avatar>
          </div>
          <div>
            <div><a href={'/questions/' + question.id}>{question.name}</a></div>
            <div className='mt-1'>
              <small className='text-muted text-center mt-2'>
                {question.user.first_name + " " + question.user.last_name} {moment(question.updated_at).fromNow()}
              </small>
            </div>
          </div>
        </div>
        <hr/>
        <article>
          {question.text}
        </article>
      </Card>
      <Answers answers={question.answers}/>
    </div>
  }
}