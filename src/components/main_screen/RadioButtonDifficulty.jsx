import React from 'react'

export default function RadioButtonDifficulty({setCurrentDifficultyLevel}) {

    const difficultyLevels = ['Giga Noob', 'Noob', 'Normal', 'Hard', 'Insane'] 


    const handleChange = (event) => {
        setCurrentDifficultyLevel(event.target.value);
    }

    return (
        <div onChange={handleChange}>
            <h3>Choose difficulty</h3>
            {difficultyLevels.map((difficultyLevel) => {
                return (
                    <div key={difficultyLevel}>
                    <input type="radio" name="difficultyLevel" value={difficultyLevel} />
                    <label>{difficultyLevel}</label>
                    </div>
                )
            })}
        </div>
    )  
}
