import React, { useState } from "react";
import { Option } from "./Option";

export const Question = (props) => {
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const answers = shuffle(props.incorrect_answers.concat(props.correct_answer));

  // const [isClicked,setIsClicked] = useState(false)

  const [allOptions, setAllOptions] = useState(allOptn());

  for (let i = 0; i < allOptions.length; i++) {
    if (
      allOptions[i].isClicked === true &&
      allOptions[i].value === props.correct_answer
    ) {
      console.log("You Clicked the correct answer");
    }
  }

  function allOptn() {
    const allAnswers = [];
    for (let i = 0; i < answers.length; i++) {
      allAnswers.push({
        value: answers[i],
        isClicked: false,
        id: answers[i],
      });
    }
    return allAnswers;
  }

  function holdOption(id) {
    setAllOptions((prevState) =>
      prevState.map((item) => {
        return item.id === id
          ? { ...item, isClicked: !item.isClicked }
          : { ...item, isClicked: false };
      })
    );
  }

  // function handleClick(){
  //     setIsClicked(prevState => !prevState)
  // }

  // console.log(shuffle(answers))
  // console.log(props.correct_answer)

  // const options = answers.map(item =>
  // <Option
  // key={item}
  // option={item}
  // id={item}
  // isClicked={isClicked}
  // onClick={handleClick}
  // />
  // )

  const options = allOptions.map((item) => (
    <Option
      key={item.id}
      option={item.value}
      id={item.id}
      isClicked={item.isClicked}
      // onClick={handleClick}
      holdOption={() => holdOption(item.id)}
    />
  ));

  return (
    <div className="qna">
      <p className="question--text">{props.question}</p>
      <div className="options">{options}</div>
      <div className="question--border"></div>
    </div>
  );
};
