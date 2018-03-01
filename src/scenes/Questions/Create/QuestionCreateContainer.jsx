import React from 'react'
import QuestionForm from "./QuestionCreateForm"
import {createQuestion} from "../question.action"
import {connect} from "react-redux"
import {Card} from "antd"

@connect(store => store.questionReducer)
export default class QuestionCreateScene extends React.Component {

  componentDidUpdate() {
    if (this.props.success) this.props.history.push('/questions/' + this.props.id)
  }

  render() {
    const {dispatch} = this.props
    return (
      <Card>
        <QuestionForm onSubmit={values => {
          dispatch(createQuestion(values))
        }}/>
      </Card>
    );
  }
}