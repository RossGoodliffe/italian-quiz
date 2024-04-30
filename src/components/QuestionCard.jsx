import React from 'react'
import { useState } from 'react'
import words from '../words.json'

import { Card, Button, ButtonGroup, Container, Row, Alert } from 'react-bootstrap'

const QuestionCard = (props) => {

  console.log(props.currentAnswers)

  // Function to return a random number within the amount of words
  const max = words.length
  // console.log('There are this many words...', max)
  const randomNumber = () => {
    return Math.floor(Math.random() * max) + 1
  }
  // console.log("this is a random number from the fuction", randomNumber())

  // Setting Question/Answer state
  const randomQuestion = words[randomNumber()]
  const [question, setQuestion] = useState(randomQuestion.italian)
  const [correctAnswer, setCorrectAnswer] = useState(randomQuestion.english)

  // Incorrect Answers
  const [wrongAnswer1, setWrongAnswer1] = useState(words[randomNumber()].english)
  const [wrongAnswer2, setWrongAnswer2] = useState(words[randomNumber()].english)

  // Result State
  const [result, setResult] = useState('info')
  const [resultMessage, setResultMessage] = useState('Good Luck!')


  console.log('Current Italian answer is: ', question)
  console.log('Current English answer is: ', correctAnswer)
  console.log('Wrong Answer: ', wrongAnswer1)
  console.log('Wrong Answer: ', wrongAnswer2)

  // Load new question and setState
  const getNewQuestion = () => {
    const randomQuestion = words[randomNumber()]
    const currentQuestion = randomQuestion.italian
    const currentAnswer = randomQuestion.english

    setQuestion(currentQuestion)
    setCorrectAnswer(currentAnswer)
    // setState for wrong answers
    setWrongAnswer1(words[randomNumber()].english)
    setWrongAnswer2(words[randomNumber()].english)
  }

  const checkAnswer = async (answerGiven) => {

    let scoreTally = props.currentScore

    answerGiven === correctAnswer ?
        (console.log("Correct!"), setResult('success'), setResultMessage(`Correct, "${correctAnswer}" is the translation of "${question}"`),props.setScoreValue(scoreTally+1))
      : 
        (console.log("You Stupid!"), setResult('danger'), setResultMessage(`Unlucky, "${correctAnswer}" was the translation of "${question}"`))

    // answered === true ? props.setValue(+1) : console.log('function ran anyways')
    let questionTally = props.currentAnswers
    props.setAnswerValue(questionTally+1)


    console.log('The Italian answer was: ', question)
    console.log('The English answer was: ', correctAnswer)

    getNewQuestion()
  }

  // function to randomise the order of the answers and store in an array
  const randomiseAnswers = (str1, str2, str3) => {
    const stringsArray = [str1, str2, str3];
    const randomizedArray = [];
  
    while (stringsArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * (randomizedArray.length + 1));
      randomizedArray.splice(randomIndex, 0, stringsArray.pop());
    }
  
    return randomizedArray;
  }

  const answers = randomiseAnswers(correctAnswer, wrongAnswer1, wrongAnswer2)
 

  return (
    <>
      <Container fluid className='m-2'>
        <Row fluid className='justify-content-md-center' > 
          <Card style={{ width: '75%' }} className='mx-auto text-center shadow-3'>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted  text-center">What is the English Translation?</Card.Subtitle>
                <Card.Title className='my-5 text-center'>
                    <h1>{question}</h1>
                </Card.Title>
                <ButtonGroup className='w-100'>
                  <Button className='mx-1' variant="success" onClick={(e) => checkAnswer(answers[0])} value={answers[0]}>{answers[0]}</Button>
                  <Button className='mx-1' variant="light" onClick={(e) => checkAnswer(answers[1])} value={answers[1]}>{answers[1]}</Button>
                  <Button className='mx-1' variant="danger" onClick={(e) => checkAnswer(answers[2])} value={answers[2]}>{answers[2]}</Button>
                </ButtonGroup>
              </Card.Body>
          </Card>
          <Alert className='mx-auto px-5  text-center' style={{ width: '75%' }} variant={result}>
          <Alert.Heading>{resultMessage}</Alert.Heading>
          </Alert>
        </Row>
      </Container>
  </>
  )
}

export default QuestionCard