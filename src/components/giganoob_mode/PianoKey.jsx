import React, { useEffect, useState } from 'react'

export default function PianoKey({note, octave, setIsAudioBussy}) {

    const EXTENSION = ".mp3";
    const [audio, setAudio] = useState(new Audio(""));
  
    const start = () => {
      setIsAudioBussy(true)
      audio.play()
      audio.onended = function () {
        setIsAudioBussy(false)
      }
    }
  
    useEffect(() => {
      if (note && octave) {
        setAudio(new Audio(process.env.PUBLIC_URL + "/piano/" + note + octave + EXTENSION))
      }
    }, [note, octave])

  return (
    <button onClick={start}>{note}</button>
  )
}
