import React from 'react'

export default function StartQuizzButton({currentDifficultyLevel, setHasStarted, hasStarted}) {

    const handleClick = () => {          
        setHasStarted(true);
    }

    return (
        <>{!hasStarted && currentDifficultyLevel &&
            <button onClick={handleClick} >Start!</button>
        }</>
    )
}
