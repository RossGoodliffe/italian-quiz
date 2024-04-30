import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './components/NavBar.jsx'
import ScoreCard from './components/ScoreCard.jsx'
import QuestionCard from './components/QuestionCard.jsx'

import { Row, Col, Container } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // State to keep track of questions answered & score
  const [answered, setAnswered] = useState(0)
  const [score, setScore] = useState(0)


  return (
    <>

      <NavBar />
      <Container>
      <Row className="justify-content-md-center m-1">
        <Col className='text-center p-1'>
          <ScoreCard cardType={"answered"} value={answered} />
        </Col>
        <Col className='text-center'>
          <ScoreCard cardType={"score"} value={score} />
        </Col>
      </Row>
      </Container>
      <QuestionCard currentScore={score} setScoreValue={setScore} currentAnswers={answered} setAnswerValue={setAnswered} />
    </>
  )
}

export default App
