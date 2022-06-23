import React, { useState } from 'react'
import { useEffect } from 'react';
import PianoKey from './PianoKey'

export default function GigaNoobMode({setIsAudioBussy}) {
    
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [answeredQuestions, setAnsweredQuestions] = useState(0);
    const [posibleAnswers, setPosibleAnswers] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState("");
    
    useEffect(()=>{
        setCurrentQuestion(currentQuestion+1)
        
    })

  return (
    <div>GigaNoob
        <PianoKey note="A" octave={4} setIsAudioBussy={setIsAudioBussy}></PianoKey>
    </div>
  )
}
