import React, { useState } from 'react'
import { useEffect } from 'react';
import { generateRandomNote } from '../utils/generateRandomNote';
import { generateRandomOctave } from '../utils/generateRandomOctave';
import PianoKey from './PianoKey'

export default function GigaNoobMode({ setIsAudioBussy }) {




  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  const [incorrectAnswer, setIncorrectAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [isCorrectFirst, setIsCorrectFirst] = useState(false);

  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [win, setWin] = useState(false);
  const [hasBeenAnswered, setHasBeenAnswered] = useState(false);

  useEffect(() => {
    if (hasBeenAnswered) {
      console.log("Question number ", currentQuestion, " has been answered");
      if (selectedAnswer === correctAnswer.substring(0, 1)) {
        console.log("Correct answer");
        setScore(score +1)
        setWin(true)
        console.log("Correct! (", win, ")");
        console.log("Score: ", score);

      }
      else {
        console.log("Wrong answer (", win, ")");
        setWin(false)
        console.log("The correct answer was: ", correctAnswer);
        console.log("Score: ", score);
      }
      setAnsweredQuestions(answeredQuestions + 1)
    }
  }, [hasBeenAnswered])

  const handleNextQuestion = () => {

    setIsCorrectFirst(Math.random() < 0.5)
    setHasBeenAnswered(false)
    console.log("New question")
    setSelectedAnswer("")
    console.log("Generating new answers...")
    generatePossibleAnswers()
    setWin(undefined)
    
  }

  const generatePossibleAnswers = () => {
    let notes = ["C", "D", "E", "F", "G", "A", "B"]



    let note = generateRandomNote(notes)
    let octave = generateRandomOctave(1, 7)
    let incorrectNote = generateRandomNote(notes) + octave

    setCorrectAnswer("")
    setIncorrectAnswer("")
    while (incorrectNote === note) {
      incorrectNote = generateRandomNote(notes) + octave
    }

    setCorrectAnswer(note + octave)
    console.log("The correct answer is: ", correctAnswer)
    console.log("The incorrect answer is: ", incorrectNote)
    setIncorrectAnswer(incorrectNote + octave)
    console.log("Possible answers: ", correctAnswer, incorrectAnswer)

    //Shuffle answers TODO
  }

  const handleSelectCorrectAnswer = () => {
    console.log("User has selected answer: ", correctAnswer)
    setSelectedAnswer(correctAnswer)
  }  
  const handleSelectIncorrectAnswer = () => {
    console.log("User has selected answer: ", incorrectAnswer)
    setSelectedAnswer(incorrectAnswer)
  }

  const handleConfirmAnswer = () => {
    console.log("User has confirmed answer")
    
    setHasBeenAnswered(true)
  }

  useEffect(() => {
    handleNextQuestion()
  }, [currentQuestion])

  function renderOptions() {
    return (<div>
      {isCorrectFirst
        ? <div className="div-options">
          <label>Options:</label>
          <section className="options">
          <PianoKey 
          note={correctAnswer.substring(0, 1)} 
          octave={correctAnswer.substring(1, 2) } 
          setIsAudioBussy={setIsAudioBussy} 
          value={correctAnswer} 
          selectAnswer={setSelectedAnswer}
          text={correctAnswer.substring(0,1)}/>

          <PianoKey 
          note={incorrectAnswer.substring(0, 1)} 
          octave={incorrectAnswer.substring(1, 2)} 
          setIsAudioBussy={setIsAudioBussy}  
          value={incorrectAnswer} 
          selectAnswer={setSelectedAnswer}
          text={incorrectAnswer.substring(0,1)}/>
          </section>
        </div>
        : <div className="div-options">
          <label>Options:</label>
          <section className="options">
          <PianoKey
          note={incorrectAnswer.substring(0, 1)} 
          octave={incorrectAnswer.substring(1, 2)} 
          setIsAudioBussy={setIsAudioBussy} 
          selectAnswer={setSelectedAnswer}  
          text={incorrectAnswer.substring(0,1)}/>

          <PianoKey 
          note={correctAnswer.substring(0, 1)} 
          octave={correctAnswer.substring(1, 2)} 
          setIsAudioBussy={setIsAudioBussy} 
          selectAnswer={setSelectedAnswer}  
          text={correctAnswer.substring(0,1)}/>
          </section>
        </div>
      }</div>)
  }

  return (
    <div className="giganoob-mode">GigaNoob
    <section className="score">
    <p>Score:</p>
    <p>{score}</p>
    <p>/{answeredQuestions}</p>
    </section>
    <p>Current question: {answeredQuestions+1}</p>
      <p>Selected: {selectedAnswer}</p>
      <label>Note:</label>
      <PianoKey note={correctAnswer.substring(0, 1)} octave={correctAnswer.substring(1, 2)} setIsAudioBussy={setIsAudioBussy} text="Note"/>
      {renderOptions()}
      {selectedAnswer &&
      <button onClick={handleConfirmAnswer}>Confirm {selectedAnswer}</button>}
      {hasBeenAnswered
      ?win 
      ? <p>Correct!</p>
      : <p>Wrong!</p>
      :<></>}
      {hasBeenAnswered &&
      <button onClick={handleNextQuestion}>Next</button>
      }
    </div>
  )
}
