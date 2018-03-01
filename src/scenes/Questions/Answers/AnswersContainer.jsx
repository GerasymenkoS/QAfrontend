import React from "react"
import moment from "moment/moment"
import {Avatar, Card, List} from "antd"
import {connect} from "react-redux"
import {createAnswer, getAnswers} from "./answer.action"
import CenteredSpin from "../../../components/CenteredSpin"
import {withRouter} from "react-router-dom"
import AnswerCreateForm from "./AnswerCreateForm"

@connect(store => store.answerReducer)
@withRouter
export default class AnswersContainer extends React.Component {

  componentDidMount() {
    this.props.dispatch(getAnswers(this.props.match.params.id))
  }

  render() {
    const {answers, loading, dispatch} = this.props

    const question_id = this.props.match.params.id
    if (loading) return <CenteredSpin/>

    return <section>
      <Card className='mt-3'>
        <AnswerCreateForm onSubmit={values => dispatch(createAnswer(question_id, values))}/>
      </Card>
      {answers.length ? <div>
        <h4 className='pt-4 pb-3'>Answers:</h4>
        <List
          size="large"
          bordered
          dataSource={answers}
          renderItem={answer => (
            <List.Item>
              <div className='d-flex'>
                <div className='d-flex flex-column justify-content-center align-items-center mr-3'>
                  <Avatar size='large'>{answer.user.first_name + " " + answer.user.last_name}</Avatar>
                </div>
                <div>
                  <article>{answer.text}</article>
                  <div className='mt-1'>
                    <small className='text-muted text-center mt-2'>
                      {answer.user.first_name + " " + answer.user.last_name} {moment(answer.updated_at).fromNow()}
                    </small>
                  </div>
                </div>
              </div>
            </List.Item>
          )}
        />
      </div> : null}
    </section>
  }
}