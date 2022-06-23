import React from 'react'
import RadioButtonDifficulty from './RadioButtonDifficulty';
import StartQuizzButton from './StartQuizzButton';

export default function MainScreen({currentDifficultyLevel,setCurrentDifficultyLevel,hasStarted,setHasStarted}) {
 
  return (
    <div>
        <RadioButtonDifficulty 
        setCurrentDifficultyLevel={setCurrentDifficultyLevel}/>
        
        <StartQuizzButton 
        currentDifficultyLevel={currentDifficultyLevel}
        setHasStarted={setHasStarted}
        hasStarted={hasStarted}/>
    </div>
  )
}
