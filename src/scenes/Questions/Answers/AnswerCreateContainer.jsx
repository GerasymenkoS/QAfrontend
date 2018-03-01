import React from 'react'
import QuestionForm from "./AnswerCreateForm"
import {createAnswer} from "../question.action"
import {connect} from "react-redux"

@connect(store=>store.questionReducer)
export default class QuestionCreateScene extends React.Component {

  render() {
    const {dispatch} = this.props
    return (
      <AnswerCreateForm onSubmit={values=>{dispatch(createAnswer(values))}}/>
    );
  }
}