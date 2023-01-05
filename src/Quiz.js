import React from "react";
import { Question } from "./Question";

export const Quiz = (props) => {
  function decode(str) {
    let txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  }

  // const ques = []

  // for (let i=0;i<5;i++){
  //     ques.push(props.data[i].question)
  // }

  // const questions = ques.map(item =>
  //<Question key={item} question={item}/>)

  const questions = props.data.map((item) => (
    <Question
      key={item.question}
      question={decode(item.question)}
      correct_answer={decode(item.correct_answer)}
      incorrect_answers={item.incorrect_answers.map((item) => decode(item))}
    />
  ));

  return (
    <div className="quiz">
      {questions}
      <button className="check--answers">Check Answers</button>
    </div>
  );
};
