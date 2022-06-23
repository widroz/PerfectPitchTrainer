import React, { useEffect, useState } from 'react'

export default function PianoKey({note, octave, setIsAudioBussy, selectAnswer, text}) {

    const EXTENSION = ".mp3";
    const [audio, setAudio] = useState(new Audio(""));
  
    const start = () => {
      if(selectAnswer)selectAnswer(note, octave);
      setIsAudioBussy(true)
      console.log("Playing note: ", note, octave);
      audio.play()
      audio.onended = function () {
        setIsAudioBussy(false)
        console.log("Note finished playing");
      }
    }
  
    useEffect(() => {
      if (note && octave) {
        setAudio(new Audio(process.env.PUBLIC_URL + "/piano/" + note + octave + EXTENSION))
      }
    }, [note, octave])

  return (
    <button className="piano-key"  onClick={start}>{text}</button>
  )
}
